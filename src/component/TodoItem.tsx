import React, {FC, useState} from 'react';
import {ITodo} from '../types/types';

interface ITodoItemProps {
  todo: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({todo}) => {
  const [value, setValue] = useState<boolean>(false)
  return (
    <div>
      <input
        type='checkbox'
        checked={value}
        onChange={(e) => setValue(todo.completed = e.target.checked)}
      />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
