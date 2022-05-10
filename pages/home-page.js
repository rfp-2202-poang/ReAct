import styles from "../styles/Home.module.css";
import UploadButton from "../components/homePage/UploadButton.js";
import RecordButton from "../components/homePage/RecordButton.js";
import AnalyzeButton from "../components/homePage/AnalyzeButton.js";
import ConvertToSpeech from "../components/homePage/ConvertToSpeech.js";
import ConvertToText from "../components/homePage/ConvertToText.js";


export default function homePage( {script, setScript} ) {

return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>
      <div className={styles.body}>
        <span className={styles.span}>Upload your script to get started</span>
        <UploadButton setScript={setScript}/>
        <RecordButton setScript={setScript}/>
        {/* <AnalyzeButton script={script}/> */}
      </div>
      {/* <UploadButton></UploadButton> */}
      {/* <Analyze></Analyze> */}
      {/* <ConvertToSpeech></ConvertToSpeech> */}
      {/* <ConvertToText></ConvertToText> */}
      {/* <RecordButton /> */}
      {/* <AnalyzeButton text={text}/> */}
    </div>
  );
}
