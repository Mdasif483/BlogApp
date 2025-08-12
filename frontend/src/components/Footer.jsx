import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col py-12 md:flex-row items-center justify-between">
        {/* first div */}
        <div className="w-full items-center flex flex-col justify-center px-2 sm:w-1/3 gap-2">
          <h1 className="text-xl font-bold text-gray-700">About</h1>
          <p>
            Hi, I’m Asif — a passionate learner and creator. I enjoy building web applications, exploring new technologies, and sharing ideas through blogs. When I’m not coding, you’ll find me learning new skills, working on creative projects, or diving into topics that inspire me.
          </p>
          <h4 className="text-lg font-normal">Email : <a href="https://mail.google.com/mail/u/2/#inbox">hiasif7786@gmail.com</a></h4>
          <h4 className="text-lg font-normal">Phone: <a href=" https://wa.me/message/BDOVNMRM44CRF1 ">80817 68481</a></h4>
        </div>
        {/* second div */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Quick Links</h1>
          <ul className="flex flex-col gap-2">
            <Link
              className="cursor-pointer hover:text-black text-gray-700"
              to="/"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-gray-700"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-gray-700"
              to="/about"
            >
              About
            </Link>
            <Link
              className="cursor-pointer hover:text-black text-gray-700"
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </div>
        {/* third div */}
        <div>
          <h1 className="text-xl font-bold text-gray-700 mb-5">Categories</h1>
          <ul className="flex flex-col gap-2">
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Weather
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Lifestyle
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              Technology
            </Link>
            <Link className="cursor-pointer hover:text-black text-gray-700">
              News
            </Link>
          </ul>
        </div>
      </div>
      <hr className="h-0.5 text-gray-600 bg-gray-700 w-full" />
      <div className="flex flex-col sm:flex-row justify-between items-center my-6">
        <div className="flex  gap-2 items-center justify-center">
          <img src={assets.logo} alt="" />
          <p>
            Meta <span className="font-bold text-xl">Blog</span>{" "}
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center  gap-3">
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li> copyright @code bless me </li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
