import React from 'react'
import Image from 'next/image'

type ButtonProps = {
    label: string;
    iconURL?: string,
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    fullWidth?: boolean;
};


const Button = (
    {
        label,
        iconURL,
        backgroundColor,
        textColor,
        borderColor,
        fullWidth,
}: ButtonProps) => {
  return (
    <button className={
        `flex justify-center items-center gap-2 px-7 py-4 border
        text-lg leading-none
        
        ${
              backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : 'bg-coral-red text-white border-coral-red'
            } rounded-full ${fullWidth ? 'w-full' : ''}`}>
        {label}
        {iconURL && (
            <Image
                src={iconURL}
                alt='arrow right icon'
                className='ml-2 rounded-full bg-white w-5 h-5'
                width={20}
                height={20}
            />
        )}
    </button>
    );
};

export default Button