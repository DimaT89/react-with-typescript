import React, {FC, useEffect, useState} from 'react';
import {IUser} from '../types/types';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

type IUserIdParams = {
  id: string;
}

const UserId: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<IUserIdParams>();
  const navigate = useNavigate();

  useEffect(() => {
    loadUser()
  }, []);

  async function loadUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>
        {user?.email}
      </div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zip}
      </div>
    </div>
  );
};

export default UserId;
