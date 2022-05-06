// const express = require("express");
// const path = require("path");
// const app = express();
// const dotenv = require("dotenv").config();
// const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
// const { IamAuthenticator } = require("ibm-watson/auth");
// const fs = require("fs");

// app.use(express.json());
// app.use(express.static(path.join(__dirname, "build")));

// //connection
// const textToSpeech = new TextToSpeechV1({
//   authenticator: new IamAuthenticator({
//     apikey: process.env.TEXT_TO_SPEECH_KEY,
//   }),
//   serviceUrl: process.env.TEXT_TO_SPEECH_URL,
// });

// // watson has 2 routes....text to speech
// // POST /v1/synthesize -->accepts text as JSON construct in request body
// // GET /v1/synthesize accepts text as a query
// // these all go in a api folder, route req calls these to execute

// ///////////////////////
// // LIST VOICE OPTIONS
// ///////////////////////
// textToSpeech
//   .listVoices()
//   .then((voices) => {
//     // console.log(JSON.stringify(voices, null, 2));
//     console.log(voices.result);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// // get a single voice
// // allowable voice params
// const getVoiceParams = {
//   voice: "en-US_AllisonV3Voice",
// };
// textToSpeech
//   .getVoice(getVoiceParams)
//   .then((voice) => {
//     console.log(voice.result);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// // POST /v1/synthesize
// // https://cloud.ibm.com/docs/text-to-speech?topic=text-to-speech-usingHTTP

// //////////////////////////
// ////TEXT TO AUDIO METHOD
// //////////////////////////
// const synthesizeParams = {
//   text: "this is changed audio",
//   accept: "audio/wav",
//   voice: "en-US_AllisonV3Voice",
// };
// textToSpeech
//   .synthesize(synthesizeParams)
//   .then((response) => {
//     return textToSpeech.repairWavHeaderStream(response.result);
//   })
//   .then((buffer) => {
//     //path is where you want the audio to be saved!
//     // Converted synthesize to the audio
//     fs.writeFileSync("hello_world.wav", buffer);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// app.listen(9000);
