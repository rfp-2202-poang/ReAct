const docx = require("docx");
// import * as fs from "fs";
// import docx from 'docx'
import saveAs from 'save-as'

export default function generate(text) {
  const doc = new docx.Document({
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            children: [
              new docx.TextRun(text),
              // new docx.TextRun({
              //   text: "Foo Bar",
              //   bold: true
              // }),
              // new docx.TextRun({
              //   text: "\tGithub is the best",
              //   bold: true
              // })
            ]
          })
        ]
      }
    ]
  });

  docx.Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "script.docx");
    console.log("Document created successfully");
  });
}
