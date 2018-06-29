import React from 'react';

const Button = (title, callBack) => {
    return (
        <button key={1} className='button' onClick={callBack}>
            {title}
        </button>
    )
}

export default Button;