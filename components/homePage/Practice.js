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
  const [paused, setPaused] = useState(false);
  const [characters, setCharacters] = useState(characterParser(script));
  const [paraReading, setParaReading] = useState(-1);
  const [hidingScript, setHidingScript] = useState(false);

  const stopAudio = () => {
    var synth = window.speechSynthesis;
    synth.cancel();
  }

  const handleNameChange = (e) => {
    stopAudio();
    setName(e.target.value);
    setScriptToRead(scriptParser(script, e.target.value).lines);
    setHints(scriptParser(script, e.target.value).hints);
    setStart(scriptParser(script, e.target.value).start);
    setPaused(false);
    setLineToRead(0);
  }

  const playLine = () => {
    const line = scriptToRead[lineToRead];
    stopAudio();
    let utterance = new SpeechSynthesisUtterance(line);
    speechSynthesis.speak(utterance);
    if(lineToRead < scriptToRead.length - 1){
      setLineToRead(lineToRead + 1);
    } else {
      setLineToRead(0);
    }
  }
  const reset = () =>{
    stopAudio();
    setLineToRead(0);
    setName('');
    setPaused(false);
  }

  const goToLine = (lineNum) => {
    stopAudio();
    const line = scriptToRead[lineNum];
    let utterance = new SpeechSynthesisUtterance(line);
    speechSynthesis.speak(utterance);
    if(lineNum < scriptToRead.length - 1){
      setLineToRead(lineNum + 1);
    } else {
      setLineToRead(0);
    }
  }

  const hide = () => {
    stopAudio();
    setHidingScript(!hidingScript);
  }

    return (
      <div className={styles.container}>
        <div className={styles.rowContainer}>
        <Link href='/edit'>
          <BsArrowLeft className={styles.back}/>
        </Link>
          <div className={styles.text} >
            <button className={styles.smallButton}onClick={hide}>{hidingScript ? 'Show Script' : 'Hide Script'}</button>
          {!hidingScript && script.split('\n').map((para, index) => <p
              key={index}
              className={paraReading=== index ? styles.paraReading : styles.paragraph}
              onClick={()=> {
                var synth = window.speechSynthesis;
                synth.cancel();
                if(paraReading !== index) {
                  let utterance = new SpeechSynthesisUtterance(para);
                  speechSynthesis.speak(utterance);
                  setParaReading(index);
                  utterance.onend = () => {setParaReading(-1);}
                } else {
                  setParaReading(-1);
                }
                console.log(paraReading);
              }}>{para}</p>)}
          </div>

          <div className={styles.right}>
              <p>{characters.length === 0 ? 'Choose a script that has multiple characters to use the practice feature!' : (name==='' ? 'Choose your character to start!' : 'You\'re reading for:')}</p>
              {characters.length > 0 && <select className={styles.input} value={name} onChange={handleNameChange}>
                <option value="" key="empty">Choose your character</option>
                {
                characters.map(character =>
                <option value={character} key={character}>{character}</option>
                )}
              </select>}
            <button className={styles.button} onClick={() => {goToLine(lineToRead - 2)}} disabled={name === '' || lineToRead === 0}>Previous Line</button>
            <button className={styles.button} onClick={playLine} disabled={name === ''}>{lineToRead===0 ? 'Start Practice': 'Next Line'}</button>
            <button className={styles.button} onClick={reset} disabled={name === ''}>Reset</button>
          </div>
        </div>
      </div>
    )
}
export default Practice;