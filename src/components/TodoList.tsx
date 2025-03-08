import { FaTrash, FaPen } from 'react-icons/fa';

export interface Todo {
  id: string | number;
  title: string;
  date: Date;
  completed: boolean;
}

type TodoListProps = {
  todo: Todo[];
};

function TodoList({ todo }: TodoListProps) {
  return (
    <div className='bg-blue-100 p-8 rounded-xl'>
      {todo.map((todo) => (
        <div key={todo.id} className='py-4 mb-4 bg-white rounded-xl shadow-sm'>
          <div className='flex items-center justify-between px-4'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                name=''
                id=''
                checked={todo.completed}
                className='w-6 h-6'
              />
              <div className='text-left ml-6'>
                <h3 className='text-xl font-bold text-neutral-500'>
                  {todo.title}
                </h3>
                <p className='text-sm font-semibold text-neutral-500'>
                  {todo.date.toDateString()}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <button className='bg-neutral-200 p-3 rounded-lg cursor-pointer'>
                <FaTrash />
              </button>
              <button className='bg-neutral-200 p-3 rounded-lg cursor-pointer'>
                <FaPen />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
