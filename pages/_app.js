import '../styles/globals.css'
import React, { useState } from 'react';
// import Layout from '../components/layout.js';

const text = 'My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath.'

function MyApp({ Component, pageProps }) {
  const [script, setScript] = useState(text);

  return <Component {...pageProps} script={script} setScript={setScript}/>


}

export default MyApp
