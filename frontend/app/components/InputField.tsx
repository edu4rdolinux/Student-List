import React from 'react';
import '../styles/globals.scss'

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
    className="outline-none p-2 mb-4 w-full rounded bg-gray-700 text-white"
  />
);

export default InputField;
