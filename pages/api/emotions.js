// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetchEmotion from '../../helpers/nlphelper.js'

export default function handler(req, res) {
  console.log('handler is triggering');
  fetchEmotion(req.body.text)
    .then((results) => res.status(200).send(results.result))
    .catch((err) => res.status(404).send(err));
}

