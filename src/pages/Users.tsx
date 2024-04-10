import React, {FC, useEffect, useState} from 'react';
import {IUser} from '../types/types';
import axios from 'axios';
import UserItem from '../component/UserItem';
import {List} from '../component/List';
import {useNavigate} from 'react-router-dom';

const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers()
  }, []);

  async function loadUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) =>
        <UserItem
          onClick={(user) => navigate('/users/' + user.id)}
          user={user}
          key={user.id}
        />}
    />
  );
};

export default Users;
