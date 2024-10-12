import React from 'react';
import InputField from './InputField';

interface RegisterFormProps {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ name, password, setName, setPassword, onSubmit }) => (
  <form onSubmit={onSubmit} className="p-6 rounded shadow-md w-full max-w-md bg-gray-800">
    <InputField type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <InputField type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button 
      type="submit" 
      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition w-full"
    >
      Register
    </button>
  </form>
);

export default RegisterForm;
