import Head from 'next/head'

import Style from './[id].module.css';
import Header from '../../components/Header';

export default function Saber({ saber }) {
  return (
    <>
      <Head>
        <title>MyAPP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="bg-gray-900 min-h-screen min-w-screen">
        <Header link="/" value="Retour à l'accueil" />
        <main className={`mx-20 ${Style.main}`}>
          <div className={`grid grid-cols-2 gap-4 mt-5 w-full items-center`}>
            <div className={`rounded-lg w-30 h-30 flex flex-col items-center justify-center p-4 gap-4`}>
              <div className={`lightsaber ${Style.parent}`} style={{ '--saberColor': saber.data.saber.data.attributes.color, '--saberHeight': saber.data.saber.data.attributes.size }}>
                <label for={saber.data.saber.data.id}></label>
                <input type="checkbox" id={saber.data.saber.data.id} defaultChecked />
                <div className="switch"></div>
                <div className="plasma saber"></div>
              </div>
            </div>
            <div className={`flex flex-col gap-2`}>
              <h1 className={`text-white text-6xl lowercase ${Style.Starjedi}`}>{saber.data.saber.data.attributes.name}</h1>
              <p className={`text-white text-1xl lowercase ${Style.Starjedi}`}><span className={`text-yellow-500`}>Taille: </span>{saber.data.saber.data.attributes.size}cm</p>
              <p className={`text-white text-1xl lowercase ${Style.Starjedi}`}><span className={`text-yellow-500`}>Couleur: </span>{saber.data.saber.data.attributes.color}</p>
              <p className={`text-white text-1xl lowercase ${Style.Starjedi}`}><span className={`text-yellow-500`}>Propriétaire: </span>{saber.data.saber.data.attributes.owner.data.attributes.name}</p>
              <p className={`text-white text-1xl lowercase ${Style.Starjedi}`}><span className={`text-yellow-500`}>Galaxy: </span>{saber.data.saber.data.attributes.owner.data.attributes.galaxy}</p>
              <p className={`text-white text-1xl lowercase ${Style.Starjedi}`}><span className={`text-yellow-500`}>Date de naissance: </span>{saber.data.saber.data.attributes.owner.data.attributes.birthday}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const saber = await fetch('http://127.0.0.1:1337/graphql', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        saber(id: ${id}) {
          data {
            id
            attributes {
              name
              size
              color
              owner {
                data {
                  attributes {
                    name
                    galaxy
                    birthday
                  }
                }
              }
            }
          }
        }
      }`
    }),
  })
    .then(r => r.json());

  return {
    props: {
      saber
    },
  }
}