import React from 'react'
import {FaDiscord, FaGithub, FaTwitch, FaTwitter} from "react-icons/fa";

const Footer = () => {
    const links = [
    {href: 'https://discord.com', icon:<FaDiscord/>},
    {href: 'https://https://x.com/Robinfelix123', icon:<FaTwitter/>},
    {href: 'https://github.com/HoseaFelix/Hosea_portfolio', icon:<FaGithub/>},
    {href: 'https://twitch.com', icon:<FaTwitch/>},
        
    ]
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4md:flex-row">
                <p>&copy; Autumn Leaf 2025. All rights reserved</p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link)=>(
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center hover:underline md:text-right "> privacy policy</a>
            </div>
        </footer>
    )
}
export default Footer
