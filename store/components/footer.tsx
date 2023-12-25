import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t ">
      <div className="bg-purple-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <div className="flex gap-6 pb-5">
              <img
                className="h-80 w-15 ml-auto"
                src="https://i.pinimg.com/originals/5e/79/4a/5e794ae64d84c9220cbbf94f336b7ab0.jpg"
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
              <a href="">General Information</a>
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/Terms">Terms & Conditions</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/refund">Refund Policy</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/Cashfree">Cash-Free Policy</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/FAQS">FAQS</Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/HSN">HSN Codes</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-xl pb-4">Contact </p>
            <div className="flex flex-row gap-2 items-right">
              <a href="https://www.instagram.com/shamansilverstore.in">
                {" "}
                <FaInstagram className="text-2xl cursor-pointer hover:text-purple-600" />
              </a>

              <a href="https://twitter.com/SilverByShaman">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </a>

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
          <ul>
            <li className="text-gray-500 text-md pt-2 pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/Contact">Contact US</Link>
            </li>
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
