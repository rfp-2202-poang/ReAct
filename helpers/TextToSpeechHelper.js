const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const fs = require("fs");

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.NEXT_TEXT_TO_SPEECH_KEY,
  }),
  serviceUrl: process.env.NEXT_TEXT_TO_SPEECH_URL,
});

const convertToSpeech = (synthesizeParams) => {
  return textToSpeech
    .synthesize(synthesizeParams)
    .then((response) => {
      // The following line is necessary only for
      // wav formats; otherwise, `response.result`
      // can be directly piped to a file.
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then((buffer) => {
      //currently stores audio file in root directory
      fs.writeFileSync("hello_world.wav", buffer);
    })
    .catch((err) => {
      console.log("error:", err);
    });
};

export default convertToSpeech;
