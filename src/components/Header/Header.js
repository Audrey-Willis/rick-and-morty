import React from "react";
import Nav from './Nav/Nav';


function Header(){
    return (
      <div>
        <div className="image-text">
          <Nav />
          <h1>Rick and Morty Fan Site!</h1>
          <h2>"wubba lubba dub dub"</h2>
        </div>
        <img src="https://live.staticflickr.com/7622/27982634645_bdbc95feec_b.jpg"alt="Rick and Morty with blurred   background - Menidon" />
      </div>
    );
}
export default Header;