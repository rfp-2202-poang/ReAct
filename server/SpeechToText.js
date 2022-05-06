const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config();
const SpeechToTextV1 = require("ibm-watson/speech-to-text/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const fs = require("fs");

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

//connection
const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.SPEECH_TO_TEXT_KEY,
  }),
  serviceUrl: process.env.SPEECH_TO_TEXT_URL,
});

////////////////////////////
////LIST LANGUAGES AVAILABLE
////////////////////////////
speechToText
  .listModels()
  .then((speechModels) => {
    // console.log(JSON.stringify(speechModels, null, 2));
    console.log(speechModels.result);
  })
  .catch((err) => {
    console.log("error:", err);
  });

/////////////////
///GET A LANGUAGE
/////////////////
const getModelParams = {
  modelId: "en-US_BroadbandModel",
};

speechToText
  .getModel(getModelParams)
  .then((speechModel) => {
    // console.log(JSON.stringify(speechModel, null, 2));
    console.log(speechModel.result);
  })
  .catch((err) => {
    console.log("error:", err);
  });

//////////////////////////////
// CONVERTS AUDIO FILE TO TEXT
//////////////////////////////
// const recognizeParams = {
//   //location of file
//   audio: fs.createReadStream("audio-file2.flac"),
//   contentType: "audio/flac",
//   wordAlternativesThreshold: 0.9,
//   keywords: ["colorado", "tornado", "tornadoes"],
//   keywordsThreshold: 0.5,
// };

// speechToText
//   .recognize(recognizeParams)
//   .then((speechRecognitionResults) => {
//     console.log(speechRecognitionResults.result.results);
//     // console.log(JSON.stringify(speechRecognitionResults, null, 2));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

app.listen(3002);
