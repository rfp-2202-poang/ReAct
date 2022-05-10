import styles from "../styles/Home.module.css";
import UploadButton from "../components/homePage/UploadButton.js";
import RecordButton from "../components/homePage/RecordButton.js";
import AnalyzeButton from "../components/homePage/AnalyzeButton.js";
import ConvertToSpeech from "../components/homePage/ConvertToSpeech.js";
import ConvertToText from "../components/homePage/ConvertToText.js";
import Link from 'next/link';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsArrowRight } from 'react-icons/bs';

export default function homePage({ script, setScript, uploadComplete, setUploadComplete }) {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>
      <div className={styles.body}>
        <span className={styles.span}>Upload your script to get started</span>
        <UploadButton setScript={setScript} setUploadComplete={setUploadComplete} />
        <RecordButton />
        {uploadComplete ? <><div className={styles.completeContainer}>
          <IoMdCheckmarkCircleOutline style={{ fontSize: '4rem' }} />
          <div style={{ fontSize: '15px', marginTop: '1rem' }}>Upload Complete!</div>
        </div>
        <Link href='/edit'>
            <BsArrowRight className={styles.forward} />
          </Link>
        </> : null}
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
