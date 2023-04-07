// <import styles
import styles from './quotationPreview.module.scss'
// import styles>

function QuotationPreview({ postContent } : {postContent : any}) {

  const { createdBy, quotationsBy, postContent : postContentText} = postContent;
  
  return (
    <div className={styles.quotationPreview}>
      <div className={styles.WrittenBy}>
        @{createdBy}
      </div>
      <div className={styles.quotationText}>
        <q>
          {postContentText}
        </q>
      </div>
      <div className={styles.specifications}>
        <time className={styles.time} dateTime='2023-03-14'>2023 03 14</time>
        <span className={styles.quoteBy}>{quotationsBy}</span>
      </div>
    </div>
  )
}

export default QuotationPreview;