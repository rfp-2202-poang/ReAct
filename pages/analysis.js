import styles from "../styles/Analysis.module.css";
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'
import Header from '../components/homepage/Header.js';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';

export default function Analysis({ script , analysis , analysisArr}) {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
      <Link href='/edit'>
          <BsArrowLeft className={styles.back}/>
        </Link>
        <div className={styles.rowcontainer}>

          <textarea
            className={styles.script}
            value={script}
            disabled>
          </textarea>

          <div className={styles.chartBox}>

            {/* <div className={styles.charts}> */}
            <span className={styles.emotionTitle}>Full Document - Emotion Analysis</span>
            <AnalyzeChart emotion={analysis}/>
            {/* {analysisArr.map((item, i) => {
              return (
                <>
                  <span className={styles.emotionTitle}> Keyword: {item.text} Emotion Analysis </span>
                  <AnalyzeChart emotion={item.emotion} ></AnalyzeChart>
                </>
              )
            })} */}
            {/* </div> */}
          </div>
        </div>

        <Link href='/practice'>
          <button className={styles.button}>Practice</button>
        </Link>

      </div>

    </div>
  )
}