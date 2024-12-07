import styles from './HowToBuy.module.css'

const HowToBuy = () => {
  const steps = [
    {
      title: "CREATE A WALLET",
      step: "STEP 1",
      icons: [
        "/icons/metamask.png",
        "/icons/coinbase.png",
        "/icons/trustwallet.png"
      ]
    },
    {
      title: "GET SOME ETH",
      step: "STEP 2",
      icons: ["/icons/ethereum.png"]
    },
    {
      title: "GO TO UNISWAP",
      step: "STEP 3",
      icons: ["/icons/uniswap.png"]
    }
  ]

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>HOW TO BUY</h2>
      <div className={styles.cardsWrapper}>
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={styles.card}
            style={{
              transform: `rotate(${index === 0 ? '-15deg' : index === 1 ? '0deg' : '15deg'})`
            }}
          >
            <div className={styles.cardContent}>
              <div className={styles.textContent}>
                <h3>{step.title}</h3>
                <p>{step.step}</p>
              </div>
              <div className={styles.iconsWrapper}>
                {step.icons.map((icon, i) => (
                  <img 
                    key={i}
                    src={icon} 
                    alt={`icon ${i}`}
                    className={styles.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowToBuy 