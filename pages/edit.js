import PreviewText from '../components/editPage/PreviewText.js';
import Link from 'next/link';
import styles from '../styles/Edit.module.css';

export default function Edit({ script, setScript }) {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>SCRIPT.LY</h1>
      </div>
      <PreviewText script={script} setScript={setScript}/>
      <div className={styles.buttons}>
        <Link href='/analysis'>
          <button className={styles.button}>Analysis</button>
        </Link>
        <button className={styles.button}>Practice</button>
      </div>
    </>
  )
}