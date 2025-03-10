import { useState } from 'react';

// components
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList, { Todo } from './components/TodoList';

const dummyTodos: Todo[] = [
  {
    id: 1,
    title: 'My first todo',
    description: 'This is my first todo',
    date: new Date(),
    isCompleted: false,
  },
  {
    id: 2,
    title: 'My second todo',
    description: 'This is my second todo',
    date: new Date(),
    isCompleted: false,
  },
  {
    id: 3,
    title: 'My third todo',
    description: 'This is my third todo',
    date: new Date(),
    isCompleted: true,
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);

  function addTodo(todo: Partial<Todo>) {
    const newTodo: Todo = {
      id: Date.now(),
      title: todo.title ?? 'Todo Title',
      description: todo.description ?? 'Todo Description',
      isCompleted: false,
      date: new Date(),
    };

    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  }
  console.log(todos, '==todos==');

  return (
    <main className='p-14'>
      <section className='mb-10'>
        <Header title='Todoist Appilication' />
      </section>
      <section className='mb-4'>
        <AddTodo onHandleAddTodo={addTodo} />
      </section>
      <section>
        <TodoList todos={todos} />
      </section>
    </main>
  );
}

export default App;
