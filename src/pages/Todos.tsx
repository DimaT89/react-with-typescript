import React, {FC, useEffect, useState} from 'react';
import {ITodo} from '../types/types';
import axios from 'axios';
import TodoItem from '../component/TodoItem';
import {List} from '../component/List';

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    loadTodo()
  }, []);

  async function loadTodo() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
    />
  );
};

export default Todos;
