import { FC } from "react";

interface CardProps {
  id?: string;
}

const Card: FC<CardProps> = ({ children, id }) => {
  return (
    <div id={id} className="bg-white shadow-superiority mt-10 p-4 sm:p-10">
      {children}
    </div>
  );
};

export default Card;
