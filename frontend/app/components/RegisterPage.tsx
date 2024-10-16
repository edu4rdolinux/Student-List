"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../styles/globals.scss';
import '../styles/page.scss';
import RegisterForm from './RegisterForm';
import React from 'react';

interface User {
  _id: string;
  name: string;
  password: string;
}

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  if (age < 1) {
    setAge(1);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('/api/users', { name, password, age });
    setName('');
    setPassword('');
    setAge(0);
    fetchUsers();

    router.push('/students');
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
        age={age}
        setName={setName}
        setPassword={setPassword}
        setAge={setAge}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterPage;
