import PreviewText from '../components/editPage/PreviewText.js';
import Link from 'next/link';
import styles from '../styles/Edit.module.css';
import { BsArrowLeft } from 'react-icons/bs';

export default function Edit({ script, setScript }) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>
      <div className={styles.main}>
        <Link href='/home-page'>
          <BsArrowLeft className={styles.back}/>
        </Link>
        <PreviewText script={script} setScript={setScript}/>
      </div>
      <div className={styles.buttons}>
        <Link href='/analysis'>
          <button className={styles.button}>Analysis</button>
        </Link>
        <Link href='/practice'>
          <button className={styles.button}>Practice</button>
        </Link>
      </div>
    </>
  )
}