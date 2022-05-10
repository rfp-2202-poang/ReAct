import styles from "../styles/Analysis.module.css";
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'
import Header from '../components/homepage/Header.js';

export default function Analysis({ script , analysis , analysisArr}) {

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.body}>
        <div className={styles.rowcontainer}>

          <span className={styles.script}>{script}</span>

          <div className={styles.chartBox}>
            <div className={styles.emotionTitle}>Full Document - Emotion Analysis</div>
            <div className={styles.charts}>
            <AnalyzeChart emotion={analysis}/>
            {analysisArr.map((item, i) => {
              return (
                <div key={i}>
                  <span className={styles.emotionTitle}> Keyword: {item.text} Emotion Analysis </span>
                  <AnalyzeChart emotion={item.emotion} ></AnalyzeChart>
                </div>
              )
            })}
            </div>
          </div>
        </div>

        <button className={styles.button}>Dialog Practice</button>

      </div>

    </div>
  )
}