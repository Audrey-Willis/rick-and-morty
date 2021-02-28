import React from 'react';
import {Link} from "react-router-dom";

function LandingPage(){
return (
  <div>
    <div className="landing-page-about">
      <h2> Welcome to All Fellow Multi-Dimensional Adventurers!</h2>
      <p>
        This is a site dedicated to Rick and Morty. A show that, unlike other adult cartoons, is based around a capable and intelligent main character. Being a cartoon, you expect it to be merely funny. Instead,
        it's filled with deep emotional scenes, struggles with mental health,the short-comings of man, AND humor. This mixture of deep and humorous is what makes this show so relatable to others. It's a show with a
        dedicated fan base, and a big following. Heres to hoping it stays around for a while, and continues to bring us the amazing story lines we've come to expect.
      </p>
    </div>
    <div className="links">
      <div className="linkDivs characterDiv">
        <h3>The Many Faces of Rick and Morty</h3>
        <img className="characterImage"src="https://live.staticflickr.com/5792/20931966766_3d65f28c27.jpg" alt="Rick and Morty - Where is....well Rick and Morty?" />
        <p className="linkDivsText">
          Rick and Morty is filled with a variety of complex and interesting characters. With the multitude of planets and dimensions it's no wonder that the beings who inhabit them spark interest. Click the link
          and see all of the character's available information, along with pictures. Search for your favorites or just browse the whole list!.
        </p>
        <Link to="/Characters">Characters</Link>
      </div>
      <div className="linkDivs quoteDiv">
        <h3>Quote Generator</h3>
        <img className="quoteImage" src="https://i.ibb.co/3p7sY9p/shutterstock-1736329532-1.jpg" alt="shutterstock-1736329532-1" />
        <p className="linkDivsText">
          One of the best features of Rick and Morty is the dialogue. Click this link to play with our quote generator. Press the button and get a random quote from the show. We've gathered lines from a multitude of
          characters for a well rounded adventure into the brilliance that is Rick and Morty.
        </p>
        <Link to="/QuoteGenerator">Quotes</Link>
      </div>
    </div>
  </div>
);
} 
export default LandingPage