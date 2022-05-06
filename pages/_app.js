import '../styles/globals.css'

//this is what is on every page
//ex. nav bar

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
