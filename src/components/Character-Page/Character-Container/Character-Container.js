import React from "react";

function CharacterContainer(props){
    return (
      <div className="character-cards">
        <h3>{props.result.name}</h3>
        <img src={props.result.image} alt={props.result.name} />
        <p>Status: {props.result.status}</p>
        <p>Species: {props.result.species}</p>
        <p>Gender: {props.result.gender}</p>
        <p>Origin: {props.result.origin.name}</p>
        <p>Location: {props.result.location.name}</p>
      </div>
    );
}
export default CharacterContainer;