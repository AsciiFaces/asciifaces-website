import { FC } from "react";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";

const Container: FC = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-violet pb-10 px-4">
      <Navbar />
      <Logo />
      <div className="mx-auto max-w-6xl">{children}</div>
    </div>
  );
};

export default Container;
