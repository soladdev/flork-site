import styles from './ContractInfo.module.css'

const ContractInfo = () => {
  const contractAddress = "0xdb0238975ce84f89212ffa56c64c0f2b47f8f153"
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Powered by ethereum network
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
              href="https://etherscan.io/token/0xdb0238975ce84f89212ffa56c64c0f2b47f8f153" 
              target="_blank" 
              rel="noopener"
              className={styles.button}
            >
              ETHERSCAN CONTRACT
            </a>
            <a 
              href="https://etherscan.io/tx/0xaa1d9daf8faeabddf992407e1962f8ae8adf5ef18811d1779422c02b77aee281" 
              target="_blank" 
              rel="noopener"
              className={styles.button}
            >
              CONTRACT RENOUNCED
            </a>
          </div>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="https://framerusercontent.com/images/dDGOioxO45gIhGDjbFSTRZsLuSo.png"
          alt="Flork Car"
          className={styles.florkImage}
        />
      </div>
    </div>
  )
}

export default ContractInfo 