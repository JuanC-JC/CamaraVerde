import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Introduction from '../components/Companies/Introduction'
import HelpUs from '../components/Companies/HelpUs';

import '../styles/pages/Companies.scss'


export default function Companies() {
  return (

    <>
      <Header />
      <main className='companies'>
        <Introduction />
        <HelpUs />
      </main>
      <Footer />
    </>
  );
};
