"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/globals.scss';
import './styles/page.scss';
import RegisterForm from './components/RegisterForm';
import UserList from './components/UserList';

interface User {
  _id: string;
  name: string;
  password: string;
}

const HomePage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('/api/users', { name, password });
    setName('');
    setPassword('');
    fetchUsers();
  };

  const fetchUsers = async () => {
    const response = await axios.get<User[]>('/api/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Register</h1>
      <RegisterForm 
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default HomePage;
