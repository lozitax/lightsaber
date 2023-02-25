import Head from 'next/head'

import { Inter } from '@next/font/google'
import Styles from '../styles/Home.module.css';
import Header from '../components/Header';
import SaberComponent from '../components/SaberComponent';

export default function Home({ sabers }) {
  console.log(sabers);
  return (
    <>
      <Head>
        <title>MyAPP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="bg-gray-900 min-h-screen min-w-screen">
        <Header link="#" value="Rejoindre la force" />
        <main className="mx-20">
          <h1 className={`text-4xl font-bold mb-4 text-yellow-400 pt-10 ${Styles.Starjhol}`}>Collections de sabre laser</h1>
          <div className={`grid grid-cols-4 gap-4 mt-5`}>
            {sabers.data.sabers.data.map(saber =>
              <SaberComponent name={saber.attributes.name} id={saber.id} color={saber.attributes.color} size={saber.attributes.size}></SaberComponent>
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {

  const sabers = await fetch('http://127.0.0.1:1337/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        sabers {
          data {
            id
            attributes {
              name
              size
              color
            }
          }
        }
      }`
    }),
  })
    .then(r => r.json());

  return {
    props: {
      sabers
    },
  }
}