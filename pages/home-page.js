import styles from "../styles/Home.module.css";
import UploadButton from "../components/homePage/UploadButton.js";
import RecordButton from "../components/homePage/RecordButton.js";
//import Analyze from "../components/homePage/Analyze.js";
import Practice from "../components/homePage/Practice.js";
import AnalyzeButton from "../components/homePage/AnalyzeButton.js";
import ConvertToSpeech from "../components/homePage/ConvertToSpeech.js";
import ConvertToText from "../components/homePage/ConvertToText.js";


const text = 'My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath.'

export default function homePage() {

return (
    <div className={styles.container}>
      <title>Home</title>
      <div>this is the home page</div>
      <UploadButton></UploadButton>
      {/* <Analyze></Analyze> */}
      {/* <ConvertToSpeech></ConvertToSpeech> */}
      {/* <ConvertToText></ConvertToText> */}
      <RecordButton />
      <Practice></Practice>
      <h3>Full Document Emotion Analysis</h3>
      {/* <Analyze emotion={emotion}></Analyze>
      {charts} */}
      <AnalyzeButton text={text}/>
    </div>
  );
}
