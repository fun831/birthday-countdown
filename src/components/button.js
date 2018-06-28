import React from 'react';

const Button = (title, callBack) => {
    return (
        <button className='button' onClick={callBack}>
            {title}
        </button>
    )
}

export default Button;