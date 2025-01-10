import React, {useEffect, useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const Animatedtitle = ({title, containerClass}) => {
    const containerREf = useRef()
    
    useEffect(() => {
        const ctx = gsap.context(()=>{
            const titleAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: containerREf.current,
                    start:'100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse'
                }

            })

            titleAnimation.to('.animated-word', {
                opacity:1,
                transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
                ease:'power2.inOut',
                stagger: 0.02,
                
            })
            
        }, containerREf )

        return() =>{
            ctx.revert()
        }
    }, []);
    return (
        <div 
            ref={containerREf}
            className={`animated-title ${containerClass}`}>
            {title.split('<br/>').map((line, index) => (
                <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(' ').map((word, i) => (
                        <span
                            key={i}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
export default Animatedtitle
