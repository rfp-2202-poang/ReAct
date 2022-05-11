const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
const dotenv = require('dotenv').config();

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2022-04-07",
  authenticator: new IamAuthenticator({
    apikey: process.env.NEXT_PUBLIC_TEXT_ANALYSIS_KEY
  }),
  serviceUrl: process.env.NEXT_PUBLIC_TEXT_ANALYSIS_URL
});

const fetchEmotion = (input) => {
  const analyzeParams = {
    text: input,
    features: {
      emotion: {
        document: true,
      },
      keywords: {
        emotion: true,
      }
    },
  };

  return naturalLanguageUnderstanding.analyze(analyzeParams);
};

export default fetchEmotion;

