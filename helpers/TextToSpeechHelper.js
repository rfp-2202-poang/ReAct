const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const fs = require("fs");
const dotenv = require('dotenv').config();

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.NEXT_TEXT_TO_SPEECH_KEY,
  }),
  serviceUrl: process.env.NEXT_TEXT_TO_SPEECH_URL,
});

const convertToSpeech = (synthesizeParams) => {
  //const lineNumber = 0;
  return textToSpeech
    .synthesize(synthesizeParams)
    .then((response) => {
      // The following line is necessary only for
      // wav formats; otherwise, `response.result`
      // can be directly piped to a file.
      // console.log(response.result);
      // return textToSpeech.repairWavHeaderStream(response.result);
      fs.writeFileSync(`public/audio/line.mp3`, response.result, {flag: 'w'});
      return Promise.resolve();
    })
    // .then((buffer) => {
    //   //currently stores audio file in root directory
    //   //console.log(typeof response.result);
    //   fs.writeFileSync(`public/audio/line.mp3`, buffer);
    //   return Promise.resolve();
    // })
    //then , push file into array at index
    //increment index
    .catch((err) => {
      console.log("error:", err);
    });
};

export default convertToSpeech;
