import Head from 'next/head'
import Coupon from '../src/Components/Pages/Coupon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="title" content="Yoou Share" />
        <meta name="description" content="Почасовая аренда Power Bank" />

        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://metatags.io/" />
        <meta name="og:title" content="Yoou Share" />
        <meta name="og:description" content="Почасовая аренда Power Bank" />
        <meta name="og:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://metatags.io/" />
        <meta name="twitter:title" content="Yoou Share" />
        <meta name="twitter:description" content="Почасовая аренда Power Bank" />
        <meta name="twitter:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />
      </Head>
      <Coupon />

    </div>
  )
}
