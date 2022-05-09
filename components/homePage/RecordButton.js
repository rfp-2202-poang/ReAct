import React, { useState, useEffect, useRef } from 'react';
import PreviewText from '../editPage/PreviewText.js';
import styles from '../../styles/RecordButton.module.css'

export default function RecordButton() {
  const recognition = useRef(null);
  const [record, setRecord] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    recognition.current = new SpeechRecognition();
    recognition.current.continuous = true;
    // recognition.current.interimResults = true;
    recognition.current.lang = 'en-US';
  }, [])


  const toggleRecord = () => {
    // console.log(recognition)
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
    // recognition.current.onend = () => {
    //   console.log('test');
    //   recognition.current.start();
    // }
    }
    recognition.current.onresult = (event) => {
      const script = Array.from(event.results)
        .map(line => line[0])
        .map(line => line.transcript)
        .join('');
      setTranscript(script);

      recognition.current.onerror = (event) => {
        console.log(event.error);
      }
    }
    setRecord(!record);
  };

  const togglePreview = () => {
    setPreview(!preview);
  };

  return (
    <>
    {/* <div className={styles.container}> */}
      {record
      ? <button onClick={toggleRecord} className={styles.button}>Stop</button>
      : <button onClick={toggleRecord} className={styles.button}>Record</button>}
      <p className={styles.format}>Supported formats: .mp3</p>
    {/* </div> */}

      {transcript
      ? <button onClick={togglePreview} className={styles.button}>Preview</button>
      : null}
      {preview ? <PreviewText text={transcript} /> : null}

    </>
  )
}