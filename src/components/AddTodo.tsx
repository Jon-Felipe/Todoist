import React, { useState } from 'react';

// components
import Input from './Input';
import Button from './Button';
import { Todo } from './TodoList';

type AddTodoProps = {
  onHandleAddTodo: (todo: Partial<Todo>) => void;
};

function AddTodo({ onHandleAddTodo }: AddTodoProps) {
  const [todo, setTodo] = useState<Partial<Todo>>({
    title: '',
    description: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <div className='border border-neutral-300 rounded-md p-6'>
      <div className='flex items-center gap-x-8'>
        <div className='w-md'>
          <Input
            type='text'
            placeholder='Todo Title'
            name='title'
            value={todo?.title || ''}
            onChange={handleChange}
          />
        </div>
        <div className='w-md'>
          <Input
            type='text'
            placeholder='Todo Description'
            name='description'
            value={todo?.description || ''}
            onChange={handleChange}
          />
        </div>
        <Button
          text='Add Todo'
          onClick={() => {
            onHandleAddTodo(todo);
            setTodo({ title: '', description: '' });
          }}
        />
      </div>
    </div>
  );
}

export default AddTodo;
