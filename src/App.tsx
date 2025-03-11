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
  const [todo, setTodo] = useState<Todo>({
    id: '',
    title: '',
    description: '',
    date: '',
    isCompleted: false,
  });
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function addTodo() {
    if (todo.title?.trim() === '' || todo.description?.trim() === '') {
      alert('Please provide a title and a description');
      return;
    }

    if (isEditing) {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((item) => item.id === todo.id);
      newTodos[todoIndex] = todo;
      setTodos(newTodos);
    } else {
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

    setTodo({
      id: '',
      title: '',
      description: '',
      isCompleted: false,
      date: '',
    });
  }

  function removeTodo(todoId: string | number) {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  function editTodo(todoId: string | number) {
    setIsEditing(true);

    const todo = todos.find((todo) => todo.id === todoId);
    if (todo) {
      setTodo(todo);
    } else {
      alert(`Could not find todo with id: ${todoId}`);
    }
  }

  return (
    <main className='p-14'>
      <section className='mb-10'>
        <Header title='Todoist Appilication' />
      </section>
      <section className='mb-4'>
        <AddTodo
          todo={todo}
          onHandleChange={handleOnChange}
          onHandleAddTodo={addTodo}
          isEditing={isEditing}
        />
      </section>
      <section>
        <TodoList
          todos={todos}
          handleRemoveTodo={removeTodo}
          handleEditTodo={editTodo}
        />
      </section>
    </main>
  );
}

export default App;
