import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/UploadButton.module.css'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// const FORM_STYLES = {

//     border: 'none',
//     borderRadius: '20px',
//     backgroundColor: 'rgba(176, 144, 61, 0.2)',
//     opacity: '70%',
//     transition: '1s',
//     position: 'absolute',
//     width: '429px',
//     height: '109px',
//     left: '557px',
//     top: '448px',
//     fontFamily: 'Inter',
//     fontStyle: 'normal',
//     fontWeight: '700',
//     fontSize: '40px',
//     lineHeight: '48px',
//     textAlign: 'center',
//     color: '#B0903D'
// }

const UploadButton = () => {

  const { register, handleSubmit } = useForm();
  const [analyze, setAnalyze] = useState('');

  const onSubmit = (data) => {

    const reader = new FileReader();
    reader.onload = function(e) {
      console.log('e.target.result:::', e.target.result);
      setAnalyze(e.target.result)
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
