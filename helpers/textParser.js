/*   var fs = require('fs');
 const text = fs.readFileSync('helpers/script.txt', 'utf-8'); */


 const getCleanScript = (textStr) => {
  const script = textStr.split('\n');
  const keywords = [
    'CONTINUED',
    'MORE',
    'INT',
    'EXT',
  ]
  const cleanScript = [];
  for(let i = 0; i < script.length; i ++) {
    if(!(script[i].match(/\((.+)\)/g) && script[i].match(/\((.+)\)/g)[0] === script[i]) && !keywords.some((keyword) => {return script[i].includes(keyword)})){
      if(/[A-Z]+\s\((.+)\)/g.test(script[i])) {
        cleanScript.push(script[i].replace(/\s\((.+)\)/g, ''));
      } else {
        cleanScript.push(script[i]);
      }
    }
  }
  return cleanScript;
 };

 const scriptParser = (textStr, character) => {

  character = character.toUpperCase();
  const cleanScript = getCleanScript(textStr);
  let lines = [];
  let currLine = '';
  let currName;
  let hints = [];
  let hint = '';
  let start = cleanScript[0] === character ? 1 : 0;
  for (let i = 0; i < cleanScript.length; i ++) {
    if(cleanScript[i].toUpperCase() === cleanScript[i]) {
      currName = cleanScript[i];
      if(currName === character ) {
        if(currLine.length > 0) {
          lines.push(currLine);
          currLine = '';
        }
        if(hint.length > 0) {
          hints.push(hint);
          hint = '';
        }
      }
    } else {
      if(currName !== character) {
        if(currLine.length === 0) {
          currLine = cleanScript[i];
        } else {
          currLine = currLine + ' ' + cleanScript[i];
        }
      } else {
        if(hint.length === 0) {
          hint = cleanScript[i];
        } else {
          hint = hint + ' ' + cleanScript[i];
        }
      }
    }
  }
  if(currLine.length > 0) {
    lines.push(currLine);
  }
  if(hint.length > 0) {
    hints.push(hint);
  }

  console.log(hints);
  console.log(start);
  console.log(lines);
  return {lines: lines, hints: hints, start: start};
};


const characterParser = (textStr) => {
  const cleanScript = getCleanScript(textStr);
  const characters = {};
  cleanScript.forEach((line) => {
    if(line.toUpperCase() === line){
      characters[line] = true;
    }
  })
  console.log(characters);
  return Object.keys(characters);
}

module.exports = {scriptParser, characterParser};