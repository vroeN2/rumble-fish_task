import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0px;
  background-color: #ce796b;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
`;

export const CardsWrapper = styled.div`
  aspect-ratio: 5 / 7;
  width: 30vw;
  display: grid;
  place-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -35vmin;
  width: 20vmin;
  padding: 0 4vmin;
`;

export const TinderButton = styled.button`
  font-size: 3.5vmin;
  border: 0.4vmin solid #333d48;
  border-radius: 100%;
  color: #333d48;
  background-color: transparent;
  height: 7vmin;
  width: 7vmin;
  cursor: pointer;
  display: grid;
  place-items: center;
`;

export const LoveButton = styled(TinderButton)`
  font-size: 3vmin;
  color: rgb(33, 150, 243);
  border-color: rgb(33, 150, 243);
`;
