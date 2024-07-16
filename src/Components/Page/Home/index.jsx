
import React from 'react';

import Hero from './../../Hero/index'
import About from './../About/index'
import TitleProject from '../../Title-Project';
import Realisation from '../../Realisation';
import SealAll from './../../See-All/index'
import Skills from './../../Skills/index';
import Fouter from './../../Fouter'



function Home() {
  return (
    <>
        <Hero />
      <About />
      <TitleProject />
      <Realisation />
      <SealAll />
      <Skills />
      <Fouter />
    </>
  );
}

export default Home;