const dotenv = require("dotenv").config();
const SpeechToTextV1 = require("ibm-watson/speech-to-text/v1");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1");
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2022-04-07",
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_ANALYSIS_KEY,
  }),
  serviceUrl: process.env.TEXT_ANALYSIS_URL,
});
const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.SPEECH_TO_TEXT_KEY,
  }),
  serviceUrl: process.env.SPEECH_TO_TEXT_URL,
});
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_TO_SPEECH_KEY,
  }),
  serviceUrl: process.env.TEXT_TO_SPEECH_URL,
});

module.exports = {
  //How to format params
  // const analyzeParams = {
  //   html: "<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don't like oranges.</p></body></html>",
  //   features: {
  //     emotion: {
  //       targets: ["apples", "oranges"],
  //     },
  //   },
  // };
  textAnalyzer: (analyzeParams) => {
    return naturalLanguageUnderstanding.analyze(analyzeParams);
    // .then((analysisResults) => {
    //   console.log(analysisResults.result.emotion.targets);
    //   // console.log(JSON.stringify(analysisResults, null, 2));
    // })
    // .catch((err) => {
    //   console.log("error:", err);
    // });
  },

  //setting up params for text to speech
  // const synthesizeParams = {
  //   text: "this is changed audio",
  //   accept: "audio/wav",
  //   voice: "en-US_AllisonV3Voice",
  // };
  textToSpeech: (synthesizeParams) => {
    return textToSpeech.synthesize(synthesizeParams);
    // .then((response) => {
    //   return textToSpeech.repairWavHeaderStream(response.result);
    // })
    // .then((buffer) => {
    //   //path is where you want the audio to be saved!
    //   // Converted synthesize to the audio
    //   fs.writeFileSync("hello_world.wav", buffer);
    // })
    // .catch((err) => {
    //   console.log("error:", err);
    // })
  },

  //params for Speech to text
  // const recognizeParams = {
  //   //location of file
  //   audio: fs.createReadStream("audio-file2.flac"),
  //   contentType: "audio/flac",
  //   wordAlternativesThreshold: 0.9,
  //   keywords: ["colorado", "tornado", "tornadoes"],
  //   keywordsThreshold: 0.5,
  // };
  speechToText: () => {
    return speechToText.recognize(recognizeParams);
    // .then((speechRecognitionResults) => {
    //   console.log(speechRecognitionResults.result.results);
    //   // console.log(JSON.stringify(speechRecognitionResults, null, 2));
    // })
    // .catch((err) => {
    //   console.log("error:", err);
    // });
  },
};
