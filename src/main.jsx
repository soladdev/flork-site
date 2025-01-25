import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import WalletConnect from './components/Mint/WalletConnect.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <WalletConnect>
        <App />
      </WalletConnect>
    </BrowserRouter>
  </StrictMode>,
)
