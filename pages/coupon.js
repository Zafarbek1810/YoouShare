import Head from 'next/head'
import Coupon from '../src/Components/Pages/Coupon'
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./seo'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Power</title>
        <meta name="title" content="Yoou Power" />
        <meta name="description" content="Почасовая аренда Power Bank" />

        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://metatags.io/" />
        <meta name="og:title" content="Yoou Power" />
        <meta name="og:description" content="Почасовая аренда Power Bank" />
        <meta name="og:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://metatags.io/" />
        <meta name="twitter:title" content="Yoou Power" />
        <meta name="twitter:description" content="Почасовая аренда Power Bank" />
        <meta name="twitter:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />
      </Head>
      <Coupon />
      <SEO/>

    </div>
  )
}
