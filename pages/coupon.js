import Head from 'next/head'
import Coupon from '../src/Components/Pages/Coupon'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="title" content="Yoou Share" />
        <meta name="description" content="Почасовая аренда Power Bank" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Yoou Share" />
        <meta property="og:description" content="Почасовая аренда Power Bank" />
        <meta property="og:image" content="../public/images/seo.jpg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Yoou Share" />
        <meta property="twitter:description" content="Почасовая аренда Power Bank" />
        <meta property="twitter:image" content="../public/images/seo.jpg" />
      </Head>
      <Coupon />

    </div>
  )
}
