import React, { useState } from "react";
import {
  CardBackground,
  CardContent,
  CardDescription,
  CardHeader,
  CardRating,
  CardTitle,
  CardWrapper,
} from "./styled";

type Props = {};

const TinderCard = (props: Props) => {
  const [isDescVisible, setIsDescVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDescVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDescVisible(false);
  };

  return (
    <CardWrapper>
      <CardBackground
        bgURL="https://picsum.photos/1000/1000"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      <CardContent>
        <CardHeader style={{ marginBottom: "0.5rem" }}>
          <CardTitle>TESTOWANKO</CardTitle>

          <CardRating>7.8 / 10</CardRating>
        </CardHeader>

        <CardDescription isVisible={isDescVisible}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          reiciendis autem aliquid inventore dolore. Neque ipsum sit error
          itaque iusto?
        </CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default TinderCard;
