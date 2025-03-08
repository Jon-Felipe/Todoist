// components
import Header from './components/Header';
import Button from './components/Button';
import Select from './components/Select';
import TodoList, { Todo } from './components/TodoList';

const dummyTodos: Todo[] = [
  { id: 1, title: 'My first todo', date: new Date(), completed: false },
  { id: 2, title: 'My second todo', date: new Date(), completed: false },
  { id: 3, title: 'My third todo', date: new Date(), completed: true },
];

function App() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-violet-100'>
      <div className='w-full max-w-[800px] text-center'>
        <section className='mb-10'>
          <Header title='Todoist' />
        </section>
        <section className='flex items-center justify-between mb-4'>
          <Button text='Add Task' onClick={() => console.log('add todo')} />
          <Select />
        </section>
        <section>
          <TodoList todo={dummyTodos} />
        </section>
      </div>
    </main>
  );
}

export default App;
