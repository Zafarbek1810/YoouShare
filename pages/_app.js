import {HeaderProvider} from '../src/Context/HeaderContext'
import '../styles/globals.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import 'swiper/css';

function MyApp({ Component, pageProps }) {
  return (

    <HeaderProvider>
      <Component {...pageProps} />
     </HeaderProvider>
  )
}

export default MyApp
