// <import styles
import styles from './quotationPreview.module.scss'
// import styles>

function QuotationPreview({ con } : {con : string}) {
  return (
    <div className={styles.quotationPreview}>
      <div className={styles.WrittenBy}>
        @Edgar
      </div>
      <div className={styles.quotationText}>
        <q>
          To every action there is always opposed an equal reaction.
          {con}
        </q>
      </div>
      <div className={styles.specifications}>
        <time className={styles.time} dateTime='2023-03-14'>2023 03 14</time>
        <span className={styles.quoteBy}>Isaac Newton</span>
      </div>
    </div>
  )
}

export default QuotationPreview;