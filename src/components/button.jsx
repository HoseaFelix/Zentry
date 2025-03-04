import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerclass}) => {
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerclass}`} >
            {leftIcon}
            <span className="relative incline-flex overflow-hidden font-genral font-xs uppercase"></span>

            {title}
            {rightIcon}
        </button>
    )
}
export default Button
