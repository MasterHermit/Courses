import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-500 w-full h-auto p-4 items-center">
      <div className="flex flex-col   ">
        <Link to="/">
          <img
            className="w-20 h-20  rounded-lg "
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="logo"
          />
        </Link>
        <p className="overflow-hidden sm:text-clip">
          lorem ipsum dolor sit amet, consectetur adiphvdchusdvbch
          ibfivbcjdbvijbeq ruvnoidqbvoe wrhoiv bqeodbvo
        </p>
      </div>
      <div className="md:flex md:ml-10 md:flex-row">
        <div className="flex flex-row justify-start mt-6">
          <div className="flex flex-col mr-8">
            <p className="font-bold text-lg">About us</p>
            <ul>
              <li>hjbjh</li>
              <li>hjbjh</li>
              <li>hjbjh</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg">Terms</p>
            <ul>
              <li>hjbjh</li>
              <li>hjbjh</li>
              <li>hjbjh</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-6 ml-10 ">
          <div>
            <p className="font-bold text-lg">Contact us</p>
          </div>
          <div>
            <p className="font-bold text-lg">Social links</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
