import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w[1240px] my-[12px] items-center flex justify-between max-auto">
        <div className="text-3xl font-bold">Keenie Store</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className=" hidden md:flex text-white gap-5">
          <li>Home</li>
          <li>Collection</li>
          <li>Designer</li>
          <li>Contact</li>
          <li>Order</li>
        </ul>
        {/* responsive  */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
        ${toggle ? "left-0" : "left-[100%]"} `}>
          <li className="p-5">Home</li>
          <li className="p-5">Collection</li>
          <li className="p-5">Designer</li>
          <li className="p-5">Contact</li>
          <li className="p-5">Order</li>
        </ul>
      </div>
    </div>
  );
};
