import styled from "styled-components";

export const CharacterDataStyle = styled.div`
  .characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    width: 70%;
    margin: 5%;
  }
  img:hover {
    width: 90%;
  }
  .character-page-top {
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;
    margin-left: 15%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .searchAndPageButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .searchBar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    height: 20%;
    margin: 5%;
    margin-top: 1%;
  }
  .characterPageButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
  }
  .characterPageButton button {
    height: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1rem;
  }
`;
