import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ConvertToSpeech() {
  useEffect(() => {
    axios
      .post("api/toSpeech", {
        text: "doesn't matter",
        accept: "audio/wav",
        voice: "en-US_AllisonV3Voice",
      })
      .then((res) => console.log("res", res))
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return <div>Convert To Speech page</div>;
}
