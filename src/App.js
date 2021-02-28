import React from 'react';
import {BrowserRouter as Router,Route, BrowserRouter} from "react-router-dom";
import LandingPage from './components/Landing-Page/Landing-Page';
import CharacterPage from './components/Character-Page/Character-Container/Character-Container';
import QuoteGenerator from './components/Quote-Generator/Quote-Generator';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
      <BrowserRouter>
        <Header />
        <Route exact path = "/" component={LandingPage} />
        <Route path="/Characters"component={CharacterPage} />
        <Route path= "/QuoteGenerator" component={QuoteGenerator} />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
