import React from "react";
import troll from "/src/assets/images/Troll Face.png";

const Header = () => {
  return (
    <header className="bg-[linear-gradient(90deg,_#672280_1.18%,_#A626D3_100%)] flex items-center h-16 text-white p-5">
      <img src={troll} alt="troll_image" className="mr-2" />
      <h2 className="text-2xl font-bold mr-auto">Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
