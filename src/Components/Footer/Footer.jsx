import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="mx-auto ">
      <footer className="footer  bg-black text-base-content p-10">
        <aside className="bg-slate-400">
          <img
            src="https://i.ibb.co.com/GR5Ghmf/velki-logo-DQ9-SRObi.jpg"
            alt=""
          />
        </aside>
        <h1 className="text-center text-white mt-6">
          © Copyright 2024 © 2024 Velki Agent List
        </h1>
        <div className="flex gap-3 justify-center flex-grow mt-6">
          <FaFacebook className="text-blue-500 text-2xl font-bold"></FaFacebook>
          <FaSquareTwitter className="text-green-700 text-2xl font-bold"></FaSquareTwitter>
          <BsLinkedin className="text-blue-600 text-2xl font-bold"></BsLinkedin>
        </div>
      </footer>
      <div></div>
    </div>
  );
};

export default Footer;
