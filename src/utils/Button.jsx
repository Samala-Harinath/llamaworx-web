import React, { FC } from 'react'

const Button = ({ name, className, rightIcon, onClick }) => {
    return (
        <button onClick={onClick} className={`rounded-md py-2 px-3 text-center outline-none flex gap-2 font-semibold items-center transition duration-100 hover:scale-95 ${className}`}>
            {name} {rightIcon}
        </button>
    )
}

export default Button