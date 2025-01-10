import React, {useEffect, useRef, useState} from 'react'
import Button from "./button.jsx";
import {TiLocationArrow} from "react-icons/ti";
import {useWindowScroll} from "react-use";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'

const Navbar = () => {
    const navContainerRef = useRef()
    const audionElementRef = useRef()
    const [isAudioPlaying, setAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const navItems = ['Nesux', 'Vault', 'Prologue', 'About', 'Contact']
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isNavVisble, setIsNavVisible] = useState(false)
    const [isPromptVisible, setIsPromptVisible] = useState(false)

    const {y: currrentScrollY} = useWindowScroll()


    useEffect(() => {
        setIsPromptVisible(true)
        setTimeout(()=>{
            setIsPromptVisible(false)
        }, 3000)
    }, []);
    

    useEffect(() => {
        if(currrentScrollY === 0){
            setIsNavVisible(true)
            navContainerRef.current.classList.remove('floating-nav')
        } else if(currrentScrollY > lastScrollY){
            setIsNavVisible(false)
            navContainerRef.current.classList.add('floating-nav')
        } else if(currrentScrollY < lastScrollY){
            setIsNavVisible(true)
            navContainerRef.current.classList.add('floating-nav')
        }
        setLastScrollY(currrentScrollY)
    }, [currrentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisble ? 0 : -100,
            opacity: isNavVisble ? 1 : 0,
            duration: 0.2
        })

    }, [isNavVisble]);
    
    const toggleAudioIndication = ()=>{
        setAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev)=> !prev)
    }

    useEffect(() => {
        if(isAudioPlaying){
            audionElementRef.current.play()
        } else{
            audionElementRef.current.pause()
            
        }
    }, [isAudioPlaying]);

    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all dururation-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4 relative ">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png"/>

                        <Button
                            id="product-button"
                            title="products"
                            rightIcon={<TiLocationArrow/>}
                            containerclass="bg-blue-50 md:flex hidden items-center justify-center gap-1 "
                        />
                    </div>
                    <div className="flex h-full items-center relative ">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a className="nav-hover-btn" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button onClick={toggleAudioIndication}
                                className="ml-10 flex items-center space-x-0.5 relative">
                            <audio ref={audionElementRef} className=" hidden" src="/audio/loop.mp3" loop>

                            </audio>
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                     style={{animationDelay: `${bar * 0.1}s`}}></div>
                            ))}

                            {isPromptVisible && (
                                <div className="absolute  top-full left-1/2 -translate-x-1/2 w-20 mt-10  rounded-3xl">
                                    <div className="flex w-full h-full items-center flex-col relative">
                                        <div className="wobbleFinger absolute -top-1/2 text-3xl ">
                                            ☝️
                                        </div>
                                        <p className="mt-5 text-blue-50 font-general font-bold">Play Audio</p>
                                    </div>
                                </div>
                            )}

                        </button>

                    </div>

                </nav>
            </header>
        </div>
    )
}
export default Navbar
