'use client'
import Logo from "./logo";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok} from "react-icons/fa";
import Link from 'next/link'
import { useState } from "react";

//Map of links to display in the social media icons
const size_link = 30
const links = [
    {name: "linkedin", icon: <><FaLinkedinIn size={size_link}/></>, href: "https://uk.linkedin.com/company/ppidevon"},
    {name: "facebook", icon: <><FaFacebookF size={size_link}/></>, href: "https://www.facebook.com/groups/171899451981/"},
    {name: "instagram", icon: <><FaInstagram size={size_link}/></>, href: "https://www.instagram.com/ppidevon/"},
    {name: "tiktok", icon: <><FaTiktok size={size_link}/></>, href: "https://www.tiktok.com/@ppidevon"},
];

export default function Footer() {
    const style = "w-full border-black border-b basis-1/3 p-14 text-xl";

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
    <>
    <footer>
        <div className="flex flex-col md:flex-row font-bold md:mx-10 md:mb-6 ">
            <h2 className={`text-center ${style}`}>ppidevon@gmail.com</h2>
            <h2 className={`text-nowrap text-center md:border-x ${style}`}>Devon, United Kingdom</h2>

            <div className={`flex flex-row justify-center ${style}`}>
                {links.map((link) => {
                return (
                <Link key={link.name} href={link.href} className="p-1">
                    {link.icon}
                </Link>
                );
                })}      
            </div>
        </div>
    </footer>
    
    </>
    );
}