import React, { FC } from 'react'
import Head from 'next/head'
import PageWithLayoutType from '../../types/pageWithLayoutType';
import MainLayout from '../../components/layouts/Main';

const Signup: FC = () => {
return (
<div className="main-container">
  <Head>
    <title>Next Blog Signup</title>
    <meta name="description" content="Generated by create next app" />
  </Head>
  <section className='main-contents__wrapper'>
    <h1>Signup</h1>
  </section>
</div>
)
}

(Signup as PageWithLayoutType).layout = MainLayout

export default Signup