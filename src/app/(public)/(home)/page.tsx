// <import next
import Image from 'next/image'
// import next>

// <import styles
import styles from './home.module.scss';
// import styles>

// <import components
import { QuotationPreview } from '../components';
// import components>

/**
 * @description fetch latest posts
 * @returns latest posts
 */
async function getData() {

  const res = await fetch('http://localhost:8080/v1/posts/latest-posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
  
}

/**
 * @description home page of site
 * @includes top quotations displayed by views
*/
export default async function Home() {
  
  const data = await getData();
  
  return (
    <>
      <main className={styles.homePageContainer}>
        {
          data.data.map((item: any, index: number)=> {
            return (
              <QuotationPreview postContent={item} key={index}/>
            )
          })
        }
      </main>
    </>
  )
};