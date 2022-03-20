import type { NextPage } from 'next'
import Head from 'next/head'
import PageWithLayoutType from '../types/pageWithLayoutType';
import MainLayout from '../components/layouts/Main';
import MainItems from '../components/slider/main/MainItems';

const Home: NextPage = () => {
  return (
    <div className="wrap">
      <Head>
        <title>Next Blog Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>
        <MainItems />
      </div>
      <section className='main-container'>
        <div className='main-contents__wrapper'>
          <div>
            <p>title</p>
            <div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

(Home as PageWithLayoutType).layout = MainLayout

export default Home
