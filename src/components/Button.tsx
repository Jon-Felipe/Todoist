import React from 'react';

const btnColours = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
};

type ButtonProps = {
  text: string;
  colour: 'red' | 'green' | 'blue';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick, colour = 'blue' }: ButtonProps) {
  const colourClass = btnColours[colour];

  return (
    <button
      type='button'
      className={`${colourClass} text-white text-lg font-semibold px-6 py-2 rounded-lg shadow-sm cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
