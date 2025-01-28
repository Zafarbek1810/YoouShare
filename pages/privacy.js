import Head from 'next/head'
import Footer from '../src/Components/Pages/Footer/Footer'
import Header from '../src/Components/Pages/Header/Header'
import Privacy from '../src/Components/Pages/Privacy/privacy'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Power</title>
        <meta name="description" content="Публичная оферта" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Privacy />
      <Footer />
    </div>
  )
}
