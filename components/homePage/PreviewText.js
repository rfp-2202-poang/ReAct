import React, { useState, useEffect } from 'react';

export default function PreviewText({ text }) {
  const [previewText, setPreviewText] = useState('');

  useEffect(() => {
    setPreviewText(text);
  }, [text]);

  const handleTextChange = (event) => {
    setPreviewText(event.target.value);
  }

  return (
    <textarea onChange={handleTextChange}>
      {text}
    </textarea>
  );

};
