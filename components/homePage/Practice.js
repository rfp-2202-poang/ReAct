import React, { useState, useEffect } from 'react';
import textParser from '../../helpers/textParser.js';
// import { useForm } from 'react-hook-form';
import styles from '../../styles/Practice.module.css';
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackPrevO } from "react-icons/cg";


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
    synth.pause();
  }

    return (
      <div className={styles.container}>
        <div className={styles.text}>
        {/* !practicing && */ script.split('\n').map((para, index) =><p
            key={index}
            onClick={()=> {
              let utterance = new SpeechSynthesisUtterance(para);
              speechSynthesis.speak(utterance);
            }}>{para}</p>)}
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input type='text' placeholder='your character' onChange={handleNameChange}/>
            <button className={styles.button}>Start Practice</button>
          </form>
          <CgPlayButtonO className={styles.icons} onClick={playLine} />
          <CgPlayPauseO className={styles.icons} onClick={pause} />
          <CgPlayTrackPrevO className={styles.icons} onClick={reset}/>
        </div>
      </div>
    )
}
export default Practice;