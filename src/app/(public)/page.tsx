// <import next
import Image from 'next/image'
// import next>

// <import styles
import styles from './page.module.scss';
// import styles>

// <import components
import { QuotationPreview } from './components';
// import components>

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <QuotationPreview con={'efdjk oifj iof j oi foi oijhf oiaehjf'} />
        <QuotationPreview con={'efdjk oifj iof j oi f krf i jij  j oirjgfirjg j ierj erj gr jrj j prju gpj rju epj erjgrejoi oijhf oiaehjf ooi hjoie oie oiea oieh joeh oehj oeh oh oieh oea'}/>
        <QuotationPreview con={'efdjk oifj'}/>
      </main>
    </>
  )
}
