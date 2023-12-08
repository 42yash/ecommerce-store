import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <div className="bg-purple-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-500 font-bold text-2xl pb-6">
              Certificate of Approval
            </p>
            <div className="flex gap-6 pb-5">
              <img
                className="h-80 w-19 ml-3"
                src="https://i.pinimg.com/564x/17/63/ea/1763ea151a1f9dfbbb948c68c895a8f3.jpg"
              />
              {/* <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">
              General Information
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Policies
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Return Policy
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">Contact </p>
            <div className="flex flex-row gap-2 items-right">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-purple-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023 All rights reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
