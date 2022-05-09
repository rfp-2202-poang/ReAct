import PreviewText from '../components/editPage/PreviewText.js';

export default function Edit({ script, updateScript }) {
  return (
    <>
      <PreviewText script={script} updateScript={updateScript}/>
    </>
  )
}