import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
              Privacy Policy
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms of Services
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
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">Contact </p>
            <div className="flex flex-row gap-2 items-right">
              <FaInstagram
                href=""
                className="text-2xl cursor-pointer hover:text-purple-600"
              />
              <FaTwitter
                href=""
                className="text-2xl cursor-pointer hover:text-blue-600"
              />
              <FaWhatsapp
                href=""
                className="text-2xl cursor-pointer hover:text-green-600"
              />
              <FaFacebook
                href=""
                className="text-2xl cursor-pointer hover:text-blue-400"
              />
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
