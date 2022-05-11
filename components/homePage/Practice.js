import React, { useState, useEffect } from 'react';
//import textParser from '../../helpers/textParser.js';
// import { useForm } from 'react-hook-form';
import styles from '../../styles/Practice.module.css';
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';
import {scriptParser, characterParser} from '../../helpers/textParser.js';

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
  const [characters, setCharacters] = useState(characterParser(script));

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const onSubmit = (event) => {
      event.preventDefault();
      setPracticing(true);
      const parsedScript = scriptParser(script, name)
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
    if(practicing) {
      setPracticing(false);
      var synth = window.speechSynthesis;
      synth.resume();
      synth.cancel();
      setLineToRead(0);
    }
  }

  const pause = () => {
    if(practicing) {
      var synth = window.speechSynthesis;
      setPaused(!paused);
      if(paused) {
        synth.resume();

      } else {
        synth.pause();
      }
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
          {/* !practicing && */ script.split('\n').map((para, index) => <p
              key={index}
              className={styles.paragraph}
              onClick={()=> {
                let utterance = new SpeechSynthesisUtterance(para);
                speechSynthesis.speak(utterance);
              }}>{para}</p>)}
          </div>

          <div className={styles.right}>
            <form onSubmit={onSubmit} className={styles.form}>
              {/* <input
              type='text'
              placeholder='your character'
              onChange={handleNameChange}
              className={styles.input}
              /> */}
              {/* characters.length > 0 && */ <select onChange={handleNameChange}>
                <option value="" key="empty">choose your character</option>
                {
                characters.map(character =>
                <option value={character} key={character}>{character}</option>
                )}
              </select>}
              <button className={styles.button} disabled={name.length===0}>Start Practice</button>
            </form>
            <div className={styles.smallButtons}>
              <CgPlayButtonO className={practicing && name!=="" ? styles.icons : styles.disabledIcons} onClick={playLine}/>
              <CgPlayPauseO className={practicing && name!=="" ? (paused ? styles.pausedButton :styles.icons) : styles.disabledIcons} onClick={pause} />
              <CgPlayTrackPrevO className={practicing && name!=="" ? styles.icons : styles.disabledIcons} onClick={reset} />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Practice;