import Head from 'next/head'
import Coupon from '../src/Components/Pages/Coupon'
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./seo'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="получите купон" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Coupon />
      <SEO/>
      
    </div>
  )
}
