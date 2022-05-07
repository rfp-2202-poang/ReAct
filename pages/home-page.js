import styles from '../styles/Home.module.css';
import UploadButton from '../components/homePage/UploadButton.js';
import RecordButton from '../components/homePage/RecordButton.js';
import Analyze from '../components/homePage/Analyze.js';

export default function homePage() {


  return (
    <div className={styles.container}>
      <title>Home</title>
      <div>this is the home page</div>
      <UploadButton></UploadButton>
      <RecordButton />
      <Analyze></Analyze>
    </div>
  )
}