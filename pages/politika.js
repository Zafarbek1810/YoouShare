import Head from 'next/head'
import Footer from '../src/Components/Pages/Footer/Footer'
import Header from '../src/Components/Pages/Header/Header'
import Politika from '../src/Components/Pages/Politika/politika'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Power</title>
        <meta name="description" content="Политика конфиденциальности" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Politika />
      <Footer />
    </div>
  )
}
