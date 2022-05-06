const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv").config();
const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

//connection
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2022-04-07",
  authenticator: new IamAuthenticator({
    apikey: process.env.TEXT_ANALYSIS_KEY,
  }),
  serviceUrl: process.env.TEXT_ANALYSIS_URL,
});

/////////////////
////GET EMOTION
/////////////////
const analyzeParams = {
  html: "<html><head><title>Fruits</title></head><body><h1>Apples and Oranges</h1><p>I love apples! I don't like oranges.</p></body></html>",
  features: {
    emotion: {
      targets: ["apples", "oranges"],
    },
  },
};

naturalLanguageUnderstanding
  .analyze(analyzeParams)
  .then((analysisResults) => {
    console.log(analysisResults.result.emotion.targets);
    // console.log(JSON.stringify(analysisResults, null, 2));
  })
  .catch((err) => {
    console.log("error:", err);
  });

// Can Also search by entities, keyword, metadata(gets all data),
// sentiment(positivity)
app.listen(3001);
