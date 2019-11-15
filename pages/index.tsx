import React from 'react';
import useSWR from 'swr';

import fetch from '../src/fetch';

const IndexPage = () => {
  const { data: planets, error } = useSWR(
    'https://swapi.co/api/planets',
    fetch
  );

  return (
    <>
      <h1>Star Wars API</h1>
      {error && error.message}
      {!planets && !error && <p>loading planets...</p>}
      {planets && planets.results.map(planet => <div>{planet.name}</div>)}
    </>
  );
};

export default IndexPage;
