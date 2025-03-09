import React from 'react';

type InputProps = {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
  name: string;
  value: string | number;
};

function Input({ type, placeholder, name, value }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className='border border-neutral-300 p-2 rounded-md w-full'
    />
  );
}

export default Input;
