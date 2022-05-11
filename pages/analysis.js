import styles from "../styles/Analysis.module.css";
import buttonStyles from '../styles/Button.module.css';
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'
import Header from '../components/homepage/Header.js';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import DownloadButton from '../components/homePage/DownloadButton.js';
import generate from '../helpers/download.js';

export default function Analysis({ script, analysis, analysisArr }) {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <Link href='/edit'>
          <BsArrowLeft className={styles.back} />
        </Link>
        <div className={styles.rowcontainer}>

          <textarea
            className={styles.script}
            value={script}
            disabled>
          </textarea>

          <div className={styles.chartBox}>

            <span className={styles.emotionTitle}>Full Document - Emotion Analysis</span>
            <AnalyzeChart emotion={analysis} />

          </div>
        </div>
        <div className={styles.nav}>
          <Link href='/practice'>
            <button className={buttonStyles.button}>Practice</button>
          </Link>
          <button className={buttonStyles.button} onClick={() => {generate(script)}}>Download</button>
        </div>
      </div>
    </div>
  )
}