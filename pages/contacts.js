import Head from 'next/head'
import Contacts from '../src/Components/Pages/Contacts'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contacts />
      
    </div>
  )
}
