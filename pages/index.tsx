import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Qoyo.io</title>
        <meta name="description" content="In 15min zur digitalen Marketingstrategie für KMU, Selbständige und Startups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
      </main>
    </Layout>
  )
}

export default Home
