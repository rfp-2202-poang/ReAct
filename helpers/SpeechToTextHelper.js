const SpeechToTextV1 = require("ibm-watson/speech-to-text/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const fs = require("fs");

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.NEXT_SPEECH_TO_TEXT_KEY,
  }),
  serviceUrl: process.env.NEXT_SPEECH_TO_TEXT_URL,
});

const convertToText = (recognizeParams) => {
  recognizeParams.audio = fs.createReadStream("audio-file2.flac");
  return speechToText.recognize(recognizeParams);
};

export default convertToText;
