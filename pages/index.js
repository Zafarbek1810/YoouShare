import Head from 'next/head'
import HomePage from '../src/Components/Pages/HomePage'
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./seo'));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yoou Share</title>
        <meta name="description" content="Возможность оставаться на связи 24 часа в сутки!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO/>
      <HomePage />
      
    </div>
  )
}
