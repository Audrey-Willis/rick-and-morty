import React, {useState} from "react";
import {CharacterContainerStyle} from "./Character-Container-Style"



function CharacterContainer(props) {
  const [displayToggle, setDisplayToggle] = useState(false);

  return (
    <CharacterContainerStyle>
    <div className="character-cards">
      <h3>{props.result.name}</h3>
      <img src={props.result.image} alt={props.result.name} />
      <div className="extra-character-info">
          <button
            onClick={(event) => {
              event.preventDefault();
              setDisplayToggle(!displayToggle);
            }}
          >
            More info
          </button>
        </div>
        {displayToggle && (
          <div>
            <p>Status: {props.result.status}</p>
            <p>Species: {props.result.species}</p>
            <p>Gender: {props.result.gender}</p>
            <p>Origin: {props.result.origin.name}</p>
            <p>Location: {props.result.location.name}</p>
          </div>
        )}
      </div>
      </div>
    </CharacterContainerStyle>
  );
}
export default CharacterContainer;