import React from 'react';
import GlobalStyles from './Assets/jss';
import Copywriting from './Components/Copywriting/Index';
import Header from './Components/Header';
import InitialPage from './views';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InitialPage />
      <Copywriting />
    </>
  );
};

export default App;
