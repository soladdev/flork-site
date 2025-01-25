
const endpoint = import.meta.env.VITE_SOLANA_RPC;

const config = { wsEndpoint: import.meta.env.VITE_SOLANA_WEBSOCKET_RPC, commitment: 'confirmed' }

export const solana = {
    endpoint,
    config,
}