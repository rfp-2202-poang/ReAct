import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UploadButton = () => {

  const { register, handleSubmit } = useForm();
  const [analyze, setAnalyze] = useState('');

  const onSubmit = (data) => {

  //   useEffect(() => {
  //   axios.post('/api/emotions', {text: "My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath."})
  //     .then((res) => console.log(res.data))
  // }, [])

    const reader = new FileReader();
    reader.onload = function(e) {
      const text = e.target.result
      // console.log('e.target.result:::', e.target.result);
      axios.post('/api/emotions/', {
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
  // setAnalyze(e.target.result)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} type='file' />
      <button>Analyze Script</button>
    </form>
  )
}

export default UploadButton;
