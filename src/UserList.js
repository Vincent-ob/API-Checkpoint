import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional: Create a CSS file for styles

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching the user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;