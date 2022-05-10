import PreviewText from '../components/editPage/PreviewText.js';
import Header from '../components/homepage/Header.js';
import Link from 'next/link';
import styles from '../styles/Edit.module.css';
import buttonStyles from '../styles/Button.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import AnalyzeButton from '../components/homePage/AnalyzeButton.js';

export default function Edit({ script, setScript, setAnalysis, setAnalysisArr }) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <Link href='/home-page'>
          <BsArrowLeft className={styles.back}/>
        </Link>
        <PreviewText script={script} setScript={setScript}/>
      </div>
      <div className={styles.nav}>
        <AnalyzeButton script={script} setAnalysis={setAnalysis} setAnalysisArr={setAnalysisArr} />
        <Link href='/practice'>
          <button className={buttonStyles.button}>Practice</button>
        </Link>
      </div>
    </>
  )
}