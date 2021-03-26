import styled from 'styled-components';

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 90%;
  a {
    color: black;
    text-decoration: none;
    width: 20%;
    padding: 1.5%;
    color: black;
    margin-bottom: 2%;
    font-size:1.5rem;
  }
  a:hover {
    color: darkgreen;
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
  a {
    font-size: 0.8rem;
    width: 40%;
  }
  a:hover {
    font-size: 1rem;
    color: darkgreen;
  }
  }
`;