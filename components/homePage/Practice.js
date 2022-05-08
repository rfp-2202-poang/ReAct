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
      // console.log('text', typeof text)
      // console.log('name', typeof name)
      setScriptToDisplay(text)
      setScriptToRead(textParser(text, name));
    };
    reader.readAsText(data.file[0]);
  }
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file", { required: true })} type='file' />
        <input type='text' placeholder='your character' onChange={handleNameChange}/>
        <button>Generate Script</button>
      </form>
    )
}
export default Practice;