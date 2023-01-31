import React from "react";
import { PhotoModalDisplay, PhotoModalWrapper } from "./styled";

interface PhotoModalInterface {
  link: string;
  setFalse: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoModal = ({ link, setFalse }: PhotoModalInterface): JSX.Element => {
  return (
    <PhotoModalWrapper onClick={() => setFalse(false)}>
      <PhotoModalDisplay src={link} alt="Photo of me" />
    </PhotoModalWrapper>
  );
};

export default PhotoModal;
