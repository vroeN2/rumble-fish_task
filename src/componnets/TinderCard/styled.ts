import styled, { css } from "styled-components";

interface CardInterface {
  bgURL: string;
}

interface CardDesc {
  isVisible: boolean;
}

export const CardWrapper = styled.div`
  width: 30vw;
  position: relative;
  box-sizing: border-box;
`;

export const CardBackground = styled.div<CardInterface>`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background: url(${(props) => props.bgURL});
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2.5rem;
  box-shadow: 0.5rem 0.5rem 0.5rem 0 #1f1f1f;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  color: whitesmoke;

  &:after {
    content: "";
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  margin: 0;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  color: whitesmoke;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
`;

export const CardRating = styled(CardTitle)``;

export const CardDescription = styled.h3<CardDesc>`
  margin: 0;
  max-height: 0;
  opacity: 0;
  transition: 0.5s all cubic-bezier(0.17, 0.67, 0.83, 0.67);

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 100vh;
      opacity: 1;
    `}
`;
