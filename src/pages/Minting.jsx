import { useState, useEffect } from 'react'
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

const Minting = () => {
    const { setVisible } = useWalletModal()
    const { publicKey, connected, disconnect } = useWallet();

    const [loading, setLoading] = useState(true);
    const [hoverClickable, setHoverClickable] = useState(false);
    const [cursorSet, setCursorSet] = useState(() => {
        return Math.floor(Math.random() * 4) + 1;
    });
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
        console.log(publicKey)
        console.log(connected)
    }, [connected])

    const mint = () => {

    }

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
                    <div className={mintStyles.nftWrapper}>
                        <div className={mintStyles.nftImage}>
                            <img src="./SOL.png" alt="" />
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
                    </div>

                </>
            )}
        </div>
    )
}

export default Minting;