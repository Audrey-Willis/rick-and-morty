import React from 'react';
import { Router,Route} from "react-router-dom";
import LandingPage from './components/Landing-Page/Landing-Page';
import CharacterData from "./components/Character-Page/Character-Data/Character-Data";
import QuoteGenerator from './components/Quote-Generator/Quote-Generator';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



function App() {
  return (
      <Router>
        <Header />
        <Route exact path = "/" component={LandingPage} />
        <Route path="/Characters"component={CharacterData} />
        <Route path= "/QuoteGenerator" component={QuoteGenerator} />
        <Footer />
      </Router>
  );
}

export default App;
