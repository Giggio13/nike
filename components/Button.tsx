import React from 'react'

const Button = (
    {
        label,
        iconURL,
        backgrooundColor,
        textColor,
        borderColor,
        fullwidth,

    }
) => {
  return (
    <Button>
        {label}
        {iconURL && (
            <img
                src={iconURL}
                alt='arrow right icon'
                className='ml-2 rounded-full bg-white w-5 h-5'
            />
        )}
    </Button>
  );
};

export default Button