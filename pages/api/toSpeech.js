// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import convertToSpeech from "../../helpers/TextToSpeechHelper.js";

export default function handler(req, res) {
  // console.log(req.body);
  convertToSpeech(req.body)
    .then((results) => {
      // console.log((results));
      res.status(200).send(JSON.stringify(results));
    })
    .catch((err) => {
      res.status(404).send(err);
    });
}
