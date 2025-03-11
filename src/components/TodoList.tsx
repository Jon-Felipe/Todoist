import { FaTrash, FaPen } from 'react-icons/fa';

export interface Todo {
  id: string | number;
  title: string;
  description: string;
  date: Date | string;
  isCompleted: boolean;
}

type TodoListProps = {
  todos: Todo[];
  handleRemoveTodo: (todoId: number | string) => void;
  handleEditTodo: (todoId: number | string) => void;
};

function TodoList({ todos, handleRemoveTodo, handleEditTodo }: TodoListProps) {
  return (
    <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
        <tr>
          <th className='pl-6 py-3'>
            <input type='checkbox' name='' id='' />
          </th>
          <th scope='col' className='px-6 py-3'>
            Title
          </th>
          <th scope='col' className='px-6 py-3'>
            Description
          </th>
          <th scope='col' className='px-6 py-3'>
            Status
          </th>
          <th scope='col' className='px-6 py-3'>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id} className='bg-white border-b'>
            <td className='pl-6 py-3'>
              <input type='checkbox' name='' id='' />
            </td>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex flex-col capitalize'
            >
              {todo.title}
              <span className='text-gray-500 font-normal text-xs'>
                {todo.date.toLocaleString()}
              </span>
            </th>
            <td scope='col' className='px-6 py-3'>
              {todo.description}
            </td>
            <td scope='col' className='px-6 py-3 capitalize'>
              {todo.isCompleted ? (
                <div className='bg-green-500 px-4 py-2 flex items-center justify-center'>
                  <p className='text-center text-white font-semibold'>
                    Completed
                  </p>
                </div>
              ) : (
                <div className='bg-red-500 px-4 py-2'>
                  <p className='text-center text-white font-semibold'>
                    In progress
                  </p>
                </div>
              )}
            </td>
            <td scope='col' className='px-6 py-3'>
              <div className='flex items-center gap-x-6'>
                <button
                  className='cursor-pointer'
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  <FaTrash className='text-red-500' />
                </button>
                <button
                  className='cursor-pointer'
                  onClick={() => handleEditTodo(todo.id)}
                >
                  <FaPen className='text-blue-500' />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
