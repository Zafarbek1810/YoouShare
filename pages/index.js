import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./seo'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta property="description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Yoou Share" />
        <meta property="og:description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <meta property="og:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Yoou Share" />
        <meta property="twitter:description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <meta property="twitter:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />
      </Head>
      <SEO />
      <HomePage />

    </div>
  )
}
