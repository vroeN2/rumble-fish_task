import React from "react";
import { SingleCardWrapper } from "./styled";

interface SingleCardProps {
  children?: JSX.Element;
  backgroundURL?: string;
}

const SingleCard: React.FC<
  SingleCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, backgroundURL }) => {
  return (
    <SingleCardWrapper backgroundURL={backgroundURL}>
      {children ?? <></>}
    </SingleCardWrapper>
  );
};

export default SingleCard;
