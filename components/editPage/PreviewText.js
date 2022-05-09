import React, { useState, useEffect } from 'react';

export default function PreviewText({ script, updateScript }) {

  const handleTextChange = (event) => {
    updateScript(event.target.value);
  }

  return (
    <textarea onChange={handleTextChange}>
      {script}
    </textarea>
  );

};
