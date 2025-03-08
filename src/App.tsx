// components
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-violet-100'>
      <div className='w-full max-w-[800px] text-center'>
        <section className='mb-6'>
          <Header title='Todoist' />
        </section>
        <section>
          <Button text='Add Task' onClick={() => console.log('add todo')} />
        </section>
      </div>
    </main>
  );
}

export default App;
