import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
    <div className="container">
      <h3 className="about">Speak with confidence. Speak with Script.ly.</h3>
      <ul>
        <li><FontAwesomeIcon icon={faMicrophone} /> Captivate your audience with Live Performance Practice.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Record scripts on the fly with Voice-2-Script.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Revise and edit your script with ease, even after upload.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Discover what message you're sending with Speech-Tone Analysis by IBM Watson.</li>

      </ul>
      <p style={{width: "65%"}} >
      Script.ly solves the ambiguity of emotion that often comes with public speaking. This is a script analysis tool for any public speaker to analyze their speech and get results on the emotions their speech conveys. With this immediate information in hand, anyone can edit and improve their script so the final delivery of the speech captures the true intentions behind it.
      </p>
    </div>
    </>
  );
};

export default About;
