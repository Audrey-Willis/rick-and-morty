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
    font-size:1.5rem;
  }
  .characterPageButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
    font-size:1.5rem;
  }
  .characterPageButton button {
    margin-left: 5%;
    margin-right: 5%;
    font-size:1.2rem;
    padding:2%;
    
  }
  .character-page-top h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 2rem;
  }
  .character-page-top p{
    font-size:1.3rem;
  }
  @media(max-width:800px){
  .character-page-top h1{
    font-size:1.3rem;
  }
  .character-page-top p{
    font-size:1rem;
  }
  .searchBar h2{
    font-size:1.3rem;
  }
  input{
    font-size:1rem;
  }
  .characterPageButton button{
    font-size:.8rem;
  }
  }
  @media(max-width:500px){
  .characters{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  .characterPageButton button{
    font-size:1rem;
  }
  .character-page-top h1{
    font-size:1rem;
  }
  .character-page-top p{
    font-size:1rem;
  }
  .searchBar h2{
    font-size:1rem;
  }
  input{
    font-size:1rem;
  }
  .characterPageButton{
    font-size:1rem;
  }
  }
`;
