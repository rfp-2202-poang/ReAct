import React, { useState, useEffect } from 'react';
import textParser from '../../helpers/textParser.js';
// import { useForm } from 'react-hook-form';
import styles from '../../styles/Practice.module.css';
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';

const Practice = ({ script, setScript, setUploadComplete }) => {

  // const { register, handleSubmit } = useForm();
  const [name, setName] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [scriptToRead, setScriptToRead] = useState([]);
  const [scriptToDisplay, setScriptToDisplay] = useState('');
  const [lineToRead, setLineToRead] = useState(0);
  const [hints, setHints] = useState([]);
  const [start, setStart] = useState(-1);
  const [practicing, setPracticing] = useState(false);
  const [paused, setPaused] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const onSubmit = (event) => {
      event.preventDefault();
      setPracticing(true);
      const parsedScript = textParser(script, name)
      setScriptToRead(parsedScript.lines);
      setHints(parsedScript.hints);
      setStart(parsedScript.start);
  }


  const playLine = () => {
    const line = scriptToRead[lineToRead];
    console.log(line);
      let utterance = new SpeechSynthesisUtterance(line);
      speechSynthesis.speak(utterance);
      if(lineToRead < scriptToRead.length - 1){
        setLineToRead(lineToRead + 1);
      } else {
        setLineToRead(0);
      }

  }
  const reset = () =>{
    setPracticing(false);
    var synth = window.speechSynthesis;
    synth.cancel();
    setLineToRead(0);
  }

  const pause = () => {
    var synth = window.speechSynthesis;
    setPaused(!paused);
    if(paused) {
      synth.resume();

    } else {
      synth.pause();
    }
  }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>SCRIPT.LY</h1>
        </div>
        <div className={styles.rowContainer}>
        <Link href='/edit'>
          <BsArrowLeft className={styles.back}/>
        </Link>
          <div className={styles.text} >
          {/* !practicing && */ script.split('\n').map((para, index) =><p
              key={index}
              className={styles.paragraph}
              onClick={()=> {
                let utterance = new SpeechSynthesisUtterance(para);
                speechSynthesis.speak(utterance);
              }}>{para}</p>)}
          </div>

          <div className={styles.right}>
            <form onSubmit={onSubmit} className={styles.form}>
              <input
              type='text'
              placeholder='your character'
              onChange={handleNameChange}
              className={styles.input}
              />
              <button className={styles.button}>Start Practice</button>
            </form>
            <div className={styles.smallButtons}>
              <CgPlayButtonO className={styles.icons} onClick={playLine} />
              <CgPlayPauseO className={styles.icons} onClick={pause} />
              <CgPlayTrackPrevO className={styles.icons} onClick={reset}/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Practice;