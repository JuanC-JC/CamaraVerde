import React from 'react';
import Introduction from '../components/Companies/Introduction'
import HelpUs from '../components/Companies/HelpUs';

import '../styles/pages/Companies.scss'


export default function Companies() {
  return (

    <main className='companies'>
      <Introduction />
      <HelpUs />
    </main>
  );
};
