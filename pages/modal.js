import Head from 'next/head'
import Modal from '../src/Components/Common/Modal'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="получите купон" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      
    </div>
  )
}
