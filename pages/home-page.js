import styles from "../styles/Home.module.css";
import UploadButton from "../components/homePage/UploadButton.js";
import RecordButton from "../components/homePage/RecordButton.js";
import Analyze from "../components/homePage/Analyze.js";
import Practice from "../components/homePage/Practice.js";
import ConvertToSpeech from "../components/homePage/ConvertToSpeech.js";
import ConvertToText from "../components/homePage/ConvertToText.js";

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
      <Analyze></Analyze>
      <Practice></Practice>
    </div>
  );
}
