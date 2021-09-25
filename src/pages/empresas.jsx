import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Companies/Introduction'

import '../styles/pages/Companies.scss'

export default function Companies() {
  return (

    <>
      <Header />
      <main className='companies'>
        <Introduction />
      </main>
      <Footer />
    </>
  );
};
