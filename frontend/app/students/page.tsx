"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import RegisterButton from '../components/RegisterButton';
import Link from 'next/link';

interface User {
  _id: string;
  name: string;
  password: string;
  age: number;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await axios.get<User[]>('/api/users');
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Registered Users</h1>
      <ul className="list-disc pl-5">
        {users.length === 0 ? (
          <li>No users found.</li>
        ) : (
          users.map(user => (
            <li className='flex flex-row gap-8' key={user._id}>
              <li>{user.name}<br/></li>
              <li>Age: {user.age}</li>
            </li>
          ))
        )}
      </ul><br/>
      <Link href="/">
          <RegisterButton ButtonText="Register Other Student"/>
      </Link>
    </div>
  );
}