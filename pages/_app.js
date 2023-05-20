import { HeaderProvider } from '../src/Context/HeaderContext'
import '../styles/globals.css'
import Loader from '../src/Components/Common/Loader';
import 'swiper/css';
import Scrolltotop from "../src/Components/Common/Scrolltotop/Scrolltotop"
import { useEffect, useState } from 'react';
import AOS from "aos"
import "aos/dist/aos.css";
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  
  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setLoading2(true);
    }, 1500)
  }, [])

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, [router.pathname]);


  return (
    <HeaderProvider>
      <Component {...pageProps} />
      {loading && <Loader loading2={loading2} />}
      <Scrolltotop />
    </HeaderProvider>
  )
}

export default MyApp
