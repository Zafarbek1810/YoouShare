import {HeaderProvider} from '../src/Context/HeaderContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <HeaderProvider>
      <Component {...pageProps} />
     </HeaderProvider>
  )
}

export default MyApp
