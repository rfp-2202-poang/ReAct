import styles from "../styles/Analysis.module.css";
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'

const emotion = {
  "sadness": 0.041851,
  "joy": 0.71761,
  "fear": 0.03713,
  "disgust": 0.100171,
  "anger": 0.042882
}


export default function Analysis({ script }) {
  //useEffect
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.rowcontainer}>
          <span className={styles.script}>{script}</span>
          {/* <span className={styles.line}></span> */}
          <div className={styles.chart}>
            <div className={styles.emotionTitle}>Emotion Analysis</div>
          <AnalyzeChart emotion={emotion}/>
          </div>
        </div>
        <button className={styles.button}>Dialog Practice</button>
      </div>
    </div>
  )
}