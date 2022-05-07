const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
require('dotenv-flow').config();

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2022-04-07",
  authenticator: new IamAuthenticator({
    apikey: process.env.NEXT_PUBLIC_TEXT_ANALYSIS_KEY
  }),
  serviceUrl: process.env.NEXT_PUBLIC_TEXT_ANALYSIS_URL,
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

//EXPECTED RESULTS
// "result": {
//   "usage": {
//     "text_units": 1,
//     "text_characters": 357,
//     "features": 2
//   },
//   "language": "en",
//   "keywords": [
//     {
//       "text": "fellow citizens",
//       "relevance": 0.984702,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "President Bush",
//       "relevance": 0.882,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     },
//     {
//       "text": "presidential oath",
//       "relevance": 0.668051,
//       "emotion": {
//         "sadness": 0.014592,
//         "joy": 0.673359,
//         "fear": 0.056039,
//         "disgust": 0.27142,
//         "anger": 0.063097
//       },
//       "count": 1
//     },
//     {
//       "text": "Americans",
//       "relevance": 0.572209,
//       "emotion": {
//         "sadness": 0.014592,
//         "joy": 0.673359,
//         "fear": 0.056039,
//         "disgust": 0.27142,
//         "anger": 0.063097
//       },
//       "count": 1
//     },
//     {
//       "text": "today",
//       "relevance": 0.571884,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "task",
//       "relevance": 0.56234,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "trust",
//       "relevance": 0.551576,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "service",
//       "relevance": 0.551576,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     },
//     {
//       "text": "nation",
//       "relevance": 0.546322,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     },
//     {
//       "text": "generosity",
//       "relevance": 0.538239,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     },
//     {
//       "text": "sacrifices",
//       "relevance": 0.531557,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "cooperation",
//       "relevance": 0.531557,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     },
//     {
//       "text": "ancestors",
//       "relevance": 0.521481,
//       "emotion": {
//         "sadness": 0.032506,
//         "joy": 0.638909,
//         "fear": 0.038663,
//         "disgust": 0.010915,
//         "anger": 0.037007
//       },
//       "count": 1
//     },
//     {
//       "text": "transition",
//       "relevance": 0.521481,
//       "emotion": {
//         "sadness": 0.078456,
//         "joy": 0.840563,
//         "fear": 0.016688,
//         "disgust": 0.018178,
//         "anger": 0.028542
//       },
//       "count": 1
//     }
//   ],
//   "emotion": {
//     "document": {
//       "emotion": {
//         "sadness": 0.041851,
//         "joy": 0.71761,
//         "fear": 0.03713,
//         "disgust": 0.100171,
//         "anger": 0.042882
//       }
//     }
//   }
// }
// }