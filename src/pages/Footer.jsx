import linedIn from "../assets/linkedin.png";
import gitHub from "../assets/github.png";
import { FaWhatsapp } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailOpenedFilled } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 text-base-content rounded mt-20">
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/md-minhajur-rahman-22a43b312">
                        <img src={linedIn} className="w-12" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/MinhajurRahmanCIS">
                        <img src={gitHub} className="w-12" alt="GitHub" />
                    </a>
                </div>
            </nav>
            <div className="flex flex-col sm:flex-col md:flex-row items-center text-md">
                <div className="flex items-center link link-hover">
                    <TbMailOpenedFilled className="mr-2" />
                    mdminhajurrahmancis@gmail.com
                </div>
                <div className="flex items-center ml-0 md:ml-4 link link-hover">
                    <BiSolidPhoneCall className="mr-2" />
                    +8801638850567
                </div>
                <div className="flex items-center ml-0 md:ml-4 link link-hover">
                    <FaWhatsapp className="mr-2" />
                    +8801638850567
                </div>
            </div>
            <p className="flex -m-5 link link-hover"><SlLocationPin /> Dhaka, Bangladesh</p>
            <p className="-m-5">Copyright © 2024 - All rights reserved by MRN</p>
        </footer>
    );
};

export default Footer;
