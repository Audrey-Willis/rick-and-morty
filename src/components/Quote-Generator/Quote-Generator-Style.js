import styled from "styled-components";

export const QuoteGeneratorStyle = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  color: gold;
  text-align: center;

  .page-top {
    width: 80%;
    margin-bottom: 5%;
    color: antiquewhite;
  }
  .quoteSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    color: antiquewhite;
    width: 75%;
    background-color: sandybrown;
    border: 5px solid gold;
  }
  button {
    background-color: sandybrown;
    border: solid 2px gold;
  }
  .insideQuoteSection {
    border: solid gold 5px;
    background-color: black;
    padding: 5%;
    width: 80%;
  }
  h1 {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
