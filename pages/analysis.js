import styles from "../styles/Analysis.module.css";
import AnalyzeChart from '../components/homePage/AnalyzeChart.js'

const emotion = {
  "sadness": 0.041851,
  "joy": 0.71761,
  "fear": 0.03713,
  "disgust": 0.100171,
  "anger": 0.042882
}

const results = {
  "usage": {
    "text_units": 1,
    "text_characters": 357,
    "features": 2
  },
  "language": "en",
  "keywords": [
    {
      "text": "trust",
      "relevance": 0.551576,
      "emotion": {
        "sadness": 0.638909,
        "joy": 0.038663,
        "fear": 0.038663,
        "disgust": 0.010915,
        "anger": 0.037007
      },
      "count": 1
    },

    {
      "text": "nation",
      "relevance": 0.546322,
      "emotion": {
        "sadness": 0.078456,
        "joy": 0.840563,
        "fear": 0.016688,
        "disgust": 0.018178,
        "anger": 0.028542
      },
      "count": 1
    },
    {
      "text": "generosity",
      "relevance": 0.538239,
      "emotion": {
        "sadness": 0.078456,
        "joy": 0.840563,
        "fear": 0.016688,
        "disgust": 0.018178,
        "anger": 0.028542
      },
      "count": 1
    },
    {
      "text": "sacrifices",
      "relevance": 0.531557,
      "emotion": {
        "sadness": 0.032506,
        "joy":  0.037007,
        "fear": 0.038663,
        "disgust": 0.638909,
        "anger": 0.037007
      },
      "count": 1
    },
    {
      "text": "cooperation",
      "relevance": 0.531557,
      "emotion": {
        "sadness": 0.078456,
        "joy": 0.840563,
        "fear": 0.016688,
        "disgust": 0.508178,
        "anger": 0.328542
      },
      "count": 1
    }
  ],
  "emotion": {
    "document": {
      "emotion": {
        "sadness": 0.041851,
        "joy": 0.71761,
        "fear": 0.03713,
        "disgust": 0.100171,
        "anger": 0.042882
      }
    }
  }
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

          <div className={styles.chartBox}>
            {/* <div className={styles.emotionTitle}>Full Document - Emotion Analysis</div> */}
            <div className={styles.charts}>
            <AnalyzeChart emotion={emotion}/>
            {results.keywords.map((item, i) => {
              return (
                <div key={i}>
                  <h3 className={styles.emotionTitle}> Keyword: {item.text} Emotion Analysis </h3>
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