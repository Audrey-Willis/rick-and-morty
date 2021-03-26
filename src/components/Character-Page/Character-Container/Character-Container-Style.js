import styled from "styled-components";

export const CharacterContainerStyle = styled.div`
  width:30%;
  height:80vh;
.character-cards {
  display: flex;
  flex-direction: column;
  border: sandybrown 5px solid;
  padding: 5%;
  margin: 2%;
  align-items: center;
}
h2 {
  font-size: 110%;
}
@media(max-width:800px){
  width:40%;
  
}
@media(max-width:500px){
  width:98%;
}
`;
