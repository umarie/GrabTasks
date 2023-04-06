import '@/styles/globals.css'
import Header from '../Components/layout/header'

export default function App({ Component, pageProps }) {
    
  return(
    <>
      <Header/>
      <Component {...pageProps} />
    </>
    
  ) 
  
 
}
