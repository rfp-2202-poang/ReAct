import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [script, setScript] = useState('');
  const [uploadComplete, setUploadComplete] = useState(false);
  const [analysis, setAnalysis] = useState({});
  const [analysisArr, setAnalysisArr] = useState([]);

  return <Component {...pageProps}
    script={script}
    setScript={setScript}
    setUploadComplete={setUploadComplete}
    uploadComplete={uploadComplete}
    analysis={analysis}
    setAnalysis={setAnalysis}
    analysisArr={analysisArr}
    setAnalysisArr={setAnalysisArr}
    />

}

export default MyApp
