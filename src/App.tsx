import React from 'react';
import Copywriting from './Components/Copywriting/Index';
import Header from './Components/Header/Index';
import InitialPage from './views/Index';

const App = () => {
  return (
    <>
      <Header />
      <InitialPage />
      <Copywriting />
    </>
  );
};

export default App;
