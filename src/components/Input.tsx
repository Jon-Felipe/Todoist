import React from 'react';

type InputProps = {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({ type, placeholder, name, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className='border border-neutral-300 p-2 rounded-md w-full'
    />
  );
}

export default Input;
