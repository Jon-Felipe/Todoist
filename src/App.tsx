// components
import Header from './components/Header';
import Button from './components/Button';
import Select from './components/Select';

function App() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-violet-100'>
      <div className='w-full max-w-[800px] text-center'>
        <section className='mb-8'>
          <Header title='Todoist' />
        </section>
        <section className='flex items-center justify-between'>
          <Button text='Add Task' onClick={() => console.log('add todo')} />
          <Select />
        </section>
      </div>
    </main>
  );
}

export default App;
