import React from 'react';

type ButtonProps = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      type='button'
      className='bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-lg shadow-md cursor-pointer'
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
