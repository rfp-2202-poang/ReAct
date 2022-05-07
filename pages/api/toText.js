// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import convertToText from "../../helpers/SpeechToTextHelper.js";

export default function handler(req, res) {
  console.log(req.body);
  convertToText(req.body)
    .then((results) =>
      res.status(200).send(results.result.results[0].alternatives[0].transcript)
    )
    .catch((err) => res.status(404).send(err));
}
