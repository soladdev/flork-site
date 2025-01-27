import { useState, useEffect, useMemo, useCallback } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import Header from '../components/Header/Header'
import Preloader from '../components/Preloader/Preloader'
import backgroundImage from '../assets/images/new/flork_background_blanco_01.png'
import '../styles/globals.css'
import '../styles/variables.css'
import styles from '../components/Header/Header.module.css';
import mintStyles from "../components/Mint/Mint.module.css";
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import useUmi from '../hooks/useUmi'
import {
    CandyGuard,
    CandyMachine,
    DefaultGuardSetMintArgs,
    fetchCandyGuard,
    fetchCandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import { fetchAddressLookupTable } from "@metaplex-foundation/mpl-toolbox";
import {
    publicKey as candyPublicKey,
    generateSigner,
    signAllTransactions,
    some,
    unwrapOption,
} from "@metaplex-foundation/umi";
import { base58 } from "@metaplex-foundation/umi/serializers";
import { WalletSignTransactionError } from "@solana/wallet-adapter-base";
import { buildTx, getRequiredCU } from '../components/Mint/mintHelper'

const candyMachineId = import.meta.env.VITE_CANDY_MACHINE_ID ?? "";

const Minting = () => {
    const umi = useUmi();
    const { setVisible } = useWalletModal()
    const { publicKey, connected, disconnect } = useWallet();
    const [candyMachine, setCandyMachine] = useState(null);
    const [candyGuard, setCandyGuard] = useState(null);
    const [isMinting, setIsMinting] = useState(false);
    const [amount, setAmount] = useState(1);

    const [loading, setLoading] = useState(true);
    const [hoverClickable, setHoverClickable] = useState(false);
    const [cursorSet, setCursorSet] = useState(() => {
        return Math.floor(Math.random() * 4) + 1;
    });
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const candyMachinePublicKey = candyPublicKey(candyMachineId);
            const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
            const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);
            setCandyMachine(candyMachine);
            setCandyGuard(candyGuard);
        })();
    }, []);

    const tokenBurnGuard = useMemo(() => {
        return candyGuard ? unwrapOption(candyGuard.guards.tokenBurn) : null;
    }, [candyGuard]);

    const cost = useMemo(() => {
        if (!tokenBurnGuard) return "Free mint";
        return Number(tokenBurnGuard.amount);
    }, [tokenBurnGuard]);

    const mint = useCallback(async () => {
        if (!candyMachine) throw new Error("No candy machine");
        if (!candyGuard)
            throw new Error(
                "No candy guard found. Set up a guard for your candy machine."
            );

        setIsMinting(true);

        try {
            const { guards } = candyGuard;

            const enabledGuardsKeys =
                guards && Object.keys(guards).filter((guardKey) => guards[guardKey]);

            let mintArgs = {};

            if (enabledGuardsKeys) {
                enabledGuardsKeys.forEach((guardKey) => {
                    const guardObject = unwrapOption(guards[guardKey]);
                    if (!guardObject) return null;

                    mintArgs = { ...mintArgs, [guardKey]: some(guardObject) };
                });
            }

            let tables = [];
            const lut = import.meta.env.NEXT_PUBLIC_LUT;
            if (lut) {
                const lutPubKey = candyPublicKey(lut);
                const fetchedLut = await fetchAddressLookupTable(umi, lutPubKey);
                tables = [fetchedLut];
            } else {
                console.log("No LUT found");
            }

            const mintTxs = [];
            let nftsigners = [];

            const latestBlockhash = await umi.rpc.getLatestBlockhash({
                commitment: "finalized",
            });

            const nftMint = generateSigner(umi);
            const txForSimulation = buildTx(
                umi,
                candyMachine,
                candyGuard,
                nftMint,
                mintArgs,
                tables,
                latestBlockhash,
                1_400_000
            );
            const requiredCu = await getRequiredCU(umi, txForSimulation);

            for (let i = 0; i < amount; i++) {
                const nftMint = generateSigner(umi);
                nftsigners.push(nftMint);
                const transaction = buildTx(
                    umi,
                    candyMachine,
                    candyGuard,
                    nftMint,
                    mintArgs,
                    tables,
                    latestBlockhash,
                    requiredCu
                );
                mintTxs.push(transaction);
            }
            if (!mintTxs.length) {
                console.error("no mint tx built!");
                return;
            }

            const signedTransactions = await signAllTransactions(
                mintTxs.map((transaction, index) => ({
                    transaction,
                    signers: [umi.payer, nftsigners[index]],
                }))
            );

            let signatures = [];
            let amountSent = 0;

            const sendPromises = signedTransactions.map((tx, index) => {
                return umi.rpc
                    .sendTransaction(tx, {
                        skipPreflight: true,
                        maxRetries: 1,
                        preflightCommitment: "finalized",
                        commitment: "finalized",
                    })
                    .then((signature) => {
                        console.log(
                            `Transaction ${index + 1} resolved with signature: ${base58.deserialize(signature)[0]
                            }`
                        );
                        amountSent = amountSent + 1;
                        signatures.push(signature);
                        return { status: "fulfilled", value: signature };
                    })
                    .catch((error) => {
                        console.error(`Transaction ${index + 1} failed:`, error);
                        return { status: "rejected", reason: error };
                    });
            });

            await Promise.allSettled(sendPromises);

            alert("Minted successfully!");
        } catch (e) {
            console.error(e);
            if (e instanceof WalletSignTransactionError) {
                console.error("Transaction cancelled");
            } else {
                console.error("Minting failed");
            }
        } finally {
            setIsMinting(false);
        }
    }, [umi, amount, candyMachine, candyGuard]);

    useEffect(() => {
        document.fonts.ready
            .then(() => {
                setFontsLoaded(true);
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = backgroundImage;
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });

        const handleMouseEnter = (e) => {
            const isClickable = e.target.matches(
                'a, button, [role="button"], input[type="submit"], input[type="button"], input[type="reset"], [tabindex]:not([tabindex="-1"]), .link'
            );
            setHoverClickable(isClickable);
        };

        document.addEventListener('mouseover', handleMouseEnter);

        return () => {
            document.removeEventListener('mouseover', handleMouseEnter);
        };
    }, []);

    useEffect(() => {
        if (fontsLoaded) {
        }
    }, [fontsLoaded]);
    return (
        <div className="app-container">
            <AnimatedCursor
                innerSize={32}
                outerSize={32}
                color='255, 255, 255'
                outerAlpha={0}
                innerScale={0.7}
                outerScale={5}
                trailingSpeed={8}
                hasBlendMode={false}
                zIndex={9999}
                outerStyle={{
                    border: '3px solid var(--cursor-color)'
                }}
                innerStyle={{
                    backgroundColor: 'transparent',
                    backgroundImage: hoverClickable
                        ? `url('/cursors/cursor_p${cursorSet}.${cursorSet >= 2 ? 'gif' : 'png'}')`
                        : `url('/cursors/cursor_c${cursorSet}.png')`,
                    backgroundSize: '32px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    mixBlendMode: 'normal',
                    width: '32px',
                    height: '32px',
                    transition: 'background-image 0.2s ease',
                    imageRendering: 'pixelated',
                    zIndex: 9999
                }}
            />
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <Header />
                    {publicKey && connected ? (
                        <div
                            style={{
                                position: 'absolute',
                                display: "flex",
                                flexDirection: "row",
                                bottom: "1%",
                                right: "2%",
                                alignItems: 'center', // Aligns items vertically in the container
                                gap: '5px',
                                border: '1px solid #2FBAFF',  // Adds a border around the entire container
                                padding: '10px', // Adds some space inside the border
                                borderRadius: '10px' // Optional: to round the corners of the border
                            }}
                        >
                            <div
                                className="mtsemibold connectBtn"
                                style={{
                                    fontSize: 'small',
                                    display: 'inline-flex',
                                    alignItems: 'center', // Ensures the image and text align vertically
                                    alignSelf: 'center', // Ensures the whole div aligns vertically in the center
                                    marginBottom: '0' // Removes bottom margin (optional, since we want vertical centering)
                                }}
                            >
                                <img className={`chainsImg`} src={`/SOL.png`} />
                                <span className={`wallet-address`}>
                                    {publicKey.toBase58().substring(0, 4)}...{publicKey.toBase58().substring(41)}
                                </span>
                            </div>

                            <button className="disconnectBtn" onClick={() => disconnect()} style={{ display: 'flex', alignItems: 'center' }}>
                                <img src="/Disconnect.svg" />
                            </button>
                        </div>

                    ) : (<button className={styles.connectButton} onClick={() => setVisible(true)}>
                        Connect Wallet
                    </button>)}
                    {
                        publicKey && connected && (<div className={mintStyles.nftWrapper}>
                            <div className={mintStyles.nftImage}>
                                <img src="./IMG_6295.gif" alt="" />
                            </div>
                            <div className={mintStyles.nftContent}>
                                <div className={mintStyles.nftName}>
                                    <span>Flork</span>
                                    {/* <span>FLORK</span> */}
                                </div>
                                <span>Flork NFTs bring the internet's favorite sock puppet to life with humor, creativity, and over 100 unique traits. Collect, laugh, and share in this Solana-powered adventure.</span>
                                <button className={mintStyles.mintButton} onClick={mint}>
                                    Mint
                                </button>
                            </div>
                        </div>)
                    }

                </>
            )}
        </div>
    )
}

export default Minting;