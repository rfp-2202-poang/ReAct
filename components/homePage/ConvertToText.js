import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ConvertToText() {
  useEffect(() => {
    axios
      .post("api/toText", {
        audio: "",
        contentType: "audio/flac",
        wordAlternativesThreshold: 0.9,
        keywords: ["colorado", "tornado", "tornadoes"],
        keywordsThreshold: 0.5,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return <div>Convert To Text page</div>;
}
