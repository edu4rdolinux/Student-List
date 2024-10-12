import React from 'react';

interface User {
  _id: string;
  name: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => (
  <div className="mt-4">
    <h2 className="text-2xl font-bold mb-2">Registered Users</h2>
    <ul className="list-disc pl-5">
      {users.map(user => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  </div>
);

export default UserList;
