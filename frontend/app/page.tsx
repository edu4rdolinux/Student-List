"use client"

import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  name: string;
  password: string; // Se você precisar deste campo
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Cadastro de Usuários</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Cadastrar
        </button>
      </form>
      <h2 className="text-2xl font-semibold mt-6">Usuários Cadastrados</h2>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user._id} className="border-b border-gray-300 py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
