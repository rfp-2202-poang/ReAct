import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import React, { useState } from 'react';

const text = 'My fellow citizens: I stand here today humbled by the task before us, grateful for the trust you have bestowed, mindful of the sacrifices borne by our ancestors. I thank President Bush for his service to our nation, as well as the generosity and cooperation he has shown throughout this transition. Forty-four Americans have now taken the presidential oath.'

function MyApp({ Component, pageProps }) {
  const [script, setScript] = useState(text);

  const updateScript = (input) => {
    setScript(input);
  };

  return <Component {...pageProps} script={script} updateScript={updateScript}/>
}

export default MyApp
