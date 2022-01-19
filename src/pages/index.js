import Head from 'next/head'
import TitlePage from '../components/UI/Title/TitlePage'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Movie Time</title>
        <meta name="description" content="Watch films and TV programmes online on your PC, Mac, mobile, tablet and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <TitlePage title="Home"/>
      </main>
    </div>
  )
}
