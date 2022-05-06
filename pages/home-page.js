import styles from '../styles/Home.module.css'
import UploadButton from '../components/homePage/UploadButton.js'

export default function homePage() {


  return (
    <div className={styles.container}>
      <title>Home</title>
      <div>this is the home page</div>
      <UploadButton></UploadButton>
      <button>Record</button>
    </div>
  )
}