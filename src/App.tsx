// components
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <main className='flex items-center justify-center h-screen w-screen bg-violet-100'>
      <section>
        <Header title='Todoist' />
      </section>
      <section>
        <Button />
      </section>
    </main>
  );
}

export default App;
