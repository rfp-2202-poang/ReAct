import styles from "../styles/Analysis.module.css";
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'

export default function Analysis({ script , analysis , analysisArr}) {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>

      <div className={styles.body}>
        <div className={styles.rowcontainer}>

          <span className={styles.script}>{script}</span>

          <div className={styles.chartBox}>

            {/* <div className={styles.charts}> */}
            <span className={styles.emotionTitle}>Full Document - Emotion Analysis</span>
            <AnalyzeChart emotion={analysis}/>
            {analysisArr.map((item, i) => {
              return (
                <>
                  <span className={styles.emotionTitle}> Keyword: {item.text} Emotion Analysis </span>
                  <AnalyzeChart emotion={item.emotion} ></AnalyzeChart>
                </>
              )
            })}
            {/* </div> */}
          </div>
        </div>

        <button className={styles.button}>Dialog Practice</button>

      </div>

    </div>
  )
}