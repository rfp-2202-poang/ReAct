import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/UploadButton.module.css'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UploadButton = () => {

  const { register, handleSubmit } = useForm();
  const [analyze, setAnalyze] = useState('');

  const onSubmit = (data) => {

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result

      axios.post('/api/emotions', {
        text: text
      })
      .then((emotions) => {
        console.log('emotions.data:::', emotions.data);
        setAnalyze(emotions.data)
      })
      .catch((err) => {
        console.error(err)
      })
    };

    reader.readAsText(data.firstName[0]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.input}>
      <input {...register("firstName", { required: true })} type='file' />
      {/* <button>Analyze Script</button> */}
    </form>
  )
}

export default UploadButton;
