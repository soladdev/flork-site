import styles from './ContractInfo.module.css'
import img from '../../assets/images/flork_acostado.svg'

const ContractInfo = () => {
  const contractAddress = "Comming Soon....."
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
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
        </div>
      </div>
    </div>
  )
}

export default ContractInfo 