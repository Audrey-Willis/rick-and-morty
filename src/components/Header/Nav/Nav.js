import React from "react";
import {Link} from "react-router-dom";
import {NavStyle} from "./Nav-Style";


function Nav(){
    return (
      <NavStyle>
          <Link to= "/"> Home </Link>
          <Link to= "/Characters">Characters</Link>
          <Link to="/QuoteGenerator">Quote Generator </Link>
      </NavStyle>
    );
}

export default Nav;