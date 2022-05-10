import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee, faMicrophone } from '@fortawesome/free-solid-svg-icons';


const About = () => {

  return (
    <>
    <div className="container">
      <h3 className="about">Speak with confidence. Speak with Script.ly.</h3>
      <ul>
        <li><FontAwesomeIcon icon={faMicrophone} /> Captivate your audience with Live Performance Practice.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Record scripts on the fly with Voice-2-Script.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Revise and edit your script with ease, even after upload.</li>
        <li><FontAwesomeIcon icon={faMicrophone} /> Discover what message you&apos;re sending with Speech-Tone Analysis by IBM Watson.</li>

      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    </>
  )
}

export default About;
