// <import styles
import styles from './publicLoading.module.scss';
// import styles>

// <import components
import Components from '@/app/general_components';
// import components>

/**
 * @description loading UI display in home page
 */
function Loading() {

  const repeatTimes = 5 // number of repeating loading component

  return (
    <div className={styles.loadingContainer}>
      {
        [...Array(repeatTimes)].map((element, index) => <Components.Base.QuotationPreviewLoading key={index}/>)
      }
    </div>
  )
}

export default Loading;