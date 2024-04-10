import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Users from './pages/Users';
import Todos from './pages/Todos';
import EventsExample from './component/EventsExample';
import UserId from './pages/UserId';
import TodoId from './pages/TodoId';

const App = () => {


  return (
    <BrowserRouter>
      <Link to='/users'>Пользователи</Link>
      <Link to='/todos'>Список дел</Link>
      <Routes>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserId/>}/>
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/todos/:id' element={<TodoId/>}/>
        <Route path='/' element={<EventsExample/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
