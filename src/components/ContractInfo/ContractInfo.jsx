import styles from './ContractInfo.module.css'
import img from '../../assets/images/a4.avif'

const ContractInfo = () => {
  const contractAddress = "Comming soon"
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Powered by solana network
        </h2>
        
        <div className={styles.contractSection}>
          <h3 className={styles.contractTitle}>Contract</h3>
          
          <div className={styles.addressContainer}>
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

          <div className={styles.buttonContainer}>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener"
              className={styles.button}
            >
              SOLSCAN CONTRACT
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener"
              className={styles.button}
            >
              BUY FLORK
            </a>
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={img}
          alt="Flork Car"
          className={styles.florkImage}
        />
      </div>
    </div>
  )
}

export default ContractInfo 