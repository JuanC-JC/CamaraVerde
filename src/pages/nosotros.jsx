import React from 'react';
import Header from "../components/Header";
import Introduction from '../components/Us/Introduction'
import Alcance from '../components/Us/Alcance'
import Pilares from '../components/Us/Pilares'
import Team from '../components/Us/Team'

import '../styles/pages/Us.scss'

export default function UsPage() {
  return (

    <>
      <Header />
      <main className='us'>
        <Introduction />
        <Alcance />
        <Pilares />
        <Team />
      </main >

    </>
  );
};
