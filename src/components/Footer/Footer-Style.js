import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin: 2% 0% 2% 0%;
  margin-bottom:20%;
  a {
    color: green;
    font-size:1.5rem;
  }
  a:hover {
    transform:scale(1.1);
  }
  h4{
    font-size:1.5rem;
  }
  @media(max-width:800px){
  h4{
    font-size:1.2rem;
  }
  a{
    font-size:1.2rem;
  }
  }
  @media(max-width:500px){
  a{
    font-size:1.2rem;
  }
  h4{
    font-size:1rem;
  }
  }
`;
