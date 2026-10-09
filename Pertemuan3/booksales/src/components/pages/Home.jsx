import React from 'react';
import Hero from '../shared/Hero';
import Section from '../shared/Section';
import Grid from '../shared/Grid';



function Home({ books }) {
  return (
    <>
      <Hero />
      <Section />
      <Grid books={books} />
    </>
  );
}

export default Home;