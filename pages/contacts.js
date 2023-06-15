import Head from 'next/head'
import Contacts from '../src/Components/Pages/Contacts'
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./seo'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:type" content="website" />
            <meta name="og:url" content="https://metatags.io/" />
            <meta name="og:title" content="Yoou Share" />
            <meta name="og:description" content="Возможность оставаться на связи 24 часа в сутки!"/>
            <meta name="og:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />


            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://metatags.io/" />
            <meta name="twitter:title" content="Yoou Share" />
            <meta name="twitter:description" content="Возможность оставаться на связи 24 часа в сутки!"/>
            <meta name="twitter:image" content="https://i.ibb.co/cQC6Xj4/seo.jpg" />
      </Head>
      <Contacts />
      <SEO/>
    </div>
  )
}
