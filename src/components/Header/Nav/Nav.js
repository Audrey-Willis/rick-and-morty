import React from "react";
import {Link} from "react-router-dom";
import {NavStyle} from "./Nav-Style";


function Nav(){
    return (
      <NavStyle>
        <nav>
          <Link to= "/"> Home </Link>
          <Link to= "/Characters">Characters</Link>
          <Link to="/QuoteGenerator">Quote Generator </Link>
        </nav>
      </NavStyle>
    );
}

export default Nav;