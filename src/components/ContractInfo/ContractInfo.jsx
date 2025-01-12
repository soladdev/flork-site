import styles from './ContractInfo.module.css'
import img from '../../assets/images/new/flork_acostado.svg'
import { useState } from 'react'

const ContractInfo = () => {
  const contractAddress = "0x0000000000000000000000000000000000000000"
  const [isCopied, setIsCopied] = useState(false)
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Powered by solana network Contract
      </h2>
      
      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.imageWrapper}>
            <img
              src={img}
              alt="Flork"
              className={styles.florkImage}
            />
          </div>
          
          <div className={`${styles.addressContainer} ${isCopied ? styles.copied : ''}`}>
            <div className={styles.addressWrapper}>
              <p className={styles.address}>
                {contractAddress}
              </p>
            </div>
            <button 
              onClick={copyToClipboard} 
              className={styles.copyButton}
              aria-label="Copy contract address"
            >
              COPY
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${styles.tooltip} ${isCopied ? styles.show : ''}`}>
        ¡Copiado al portapapeles!
      </div>
    </div>
  )
}

export default ContractInfo 