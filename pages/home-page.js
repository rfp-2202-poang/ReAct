import styles from "../styles/Home.module.css";
import Header from '../components/homePage/Header.js';
import UploadButton from "../components/homePage/UploadButton.js";
import RecordButton from "../components/homePage/RecordButton.js";
import AnalyzeButton from "../components/homePage/AnalyzeButton.js";
import ConvertToSpeech from "../components/homePage/ConvertToSpeech.js";
import ConvertToText from "../components/homePage/ConvertToText.js";
import Link from 'next/link';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from 'react-icons/bs';

export default function homePage({ script, setScript, uploadComplete, setUploadComplete }) {

  const checkUploadValid = () => {
    if (!uploadComplete) {
      return null;
    } else if (uploadComplete && script.length < 100) {
      return (
        <div className={styles.completeContainer}>
          <div style={{ fontSize: '15px', marginTop: '1rem', color: 'red' }}>Script too short, please try again!</div>
        </div>
      )
    } else {
      return (
        <>
        <div className={styles.completeContainer}>
          <IoMdCheckmarkCircleOutline style={{ fontSize: '4rem' }} />
          <div style={{ fontSize: '15px', marginTop: '1rem' }}>Upload Complete!</div>
        </div>
          <Link href='/edit'>
            <BsArrowRight className={styles.forward} />
          </Link>
        </>
      )
    }
  }

  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.body}>
        <span className={styles.span}>Upload your script to get started</span>
        <UploadButton setScript={setScript} setUploadComplete={setUploadComplete} />
        <RecordButton setScript={setScript} setUploadComplete={setUploadComplete} />
        {checkUploadValid()}
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
