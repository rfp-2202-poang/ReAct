import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/UploadButton.module.css';
import buttonStyles from '../../styles/Button.module.css';
import { BsFillCircleFill } from 'react-icons/bs';

export default function RecordButton({ setScript, setUploadComplete }) {
  const recognition = useRef(null);
  const [record, setRecord] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    recognition.current = new SpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.lang = 'en-US';
  }, [])


  const toggleRecord = () => {
    if (!record) {
      recognition.current.start();
      recognition.current.onstart = () => {
        console.log('starting recording');
      };
    } else {
      recognition.current.stop();
      recognition.current.onend = () => {
        console.log('stopped');
      };
    }

    recognition.current.onresult = (event) => {
      const script = Array.from(event.results)
        .map(line => line[0])
        .map(line => line.transcript)
        .join('');
      setScript(script);
      setUploadComplete(true);

      recognition.current.onerror = (event) => {
        console.log(event.error);
      }
    }

    setRecord(!record);
  };

  return (
    <>
      {record
      ? <button onClick={toggleRecord} className={buttonStyles.button}>
          <BsFillCircleFill className={styles.blinking}/>
        </button>
      : <button onClick={toggleRecord} className={buttonStyles.button}>Record</button>}
    </>
  )
}