import React from 'react';

// components
import Input from './Input';
import Button from './Button';
import { Todo } from './TodoList';

type AddTodoProps = {
  todo: Todo;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHandleAddTodo: (todo: Partial<Todo>) => void;
};

function AddTodo({ todo, onHandleChange, onHandleAddTodo }: AddTodoProps) {
  return (
    <div className='border border-neutral-300 rounded-md p-6'>
      <div className='flex items-center gap-x-8'>
        <div className='w-md'>
          <Input
            type='text'
            placeholder='Todo Title'
            name='title'
            value={todo?.title || ''}
            onChange={onHandleChange}
          />
        </div>
        <div className='w-md'>
          <Input
            type='text'
            placeholder='Todo Description'
            name='description'
            value={todo?.description || ''}
            onChange={onHandleChange}
          />
        </div>
        <Button text='Add Todo' onClick={() => onHandleAddTodo(todo)} />
      </div>
    </div>
  );
}

export default AddTodo;
