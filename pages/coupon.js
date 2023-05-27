import Head from 'next/head'
import Coupon from '../src/Components/Pages/Coupon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="получите купон" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Coupon />
      
    </div>
  )
}
