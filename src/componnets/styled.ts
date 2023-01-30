import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0px;
  background-color: ${(props) => props.theme.secondary};
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
  border: 0.4vmin solid ${(props) => props.theme.red};
  border-radius: 100%;
  color: ${(props) => props.theme.red};
  background-color: transparent;
  height: 7vmin;
  width: 7vmin;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.4s cubic-bezier(0.05, 0.43, 0.25, 0.95);

  &:hover {
    filter: drop-shadow(0px 0px 0.5vmin ${(props) => props.theme.red});
  }
`;

export const LoveButton = styled(TinderButton)`
  font-size: 3vmin;
  color: ${(props) => props.theme.green};
  border-color: ${(props) => props.theme.green};

  &:hover {
    filter: drop-shadow(0px 0px 0.5vmin ${(props) => props.theme.green});
  }
`;
