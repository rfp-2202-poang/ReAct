import React, { useState, useEffect } from 'react';
import textParser from '../../helpers/textParser.js';
import { useForm } from 'react-hook-form';


const Practice = () => {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [scriptToRead, setScriptToRead] = useState([]);
  const [scriptToDisplay, setScriptToDisplay] = useState('');
  const [lineToRead, setLineToRead] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const onSubmit = (data) => {

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result
      console.log('text', typeof text)
      console.log('name', typeof name)
      setScriptToDisplay(text)
      setScriptToRead(textParser(text, name));
    };
    reader.readAsText(data.file[0]);
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
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("file", { required: true })} type='file' />
          <input type='text' placeholder='your character' onChange={handleNameChange}/>
          <button>Generate Script</button>
        </form>
      <button onClick={playLine}>Play</button>
      </div>
    )
}
export default Practice;