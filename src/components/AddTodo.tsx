// components
import Input from './Input';
import Button from './Button';

type AddTodoProps = {};

function AddTodo({}: AddTodoProps) {
  return (
    <div className='border border-neutral-300 rounded-md p-6'>
      <div className='flex items-center gap-x-8'>
        <div className='w-md'>
          <Input type='text' placeholder='Todo Title' name='todo' value='' />
        </div>
        <div className='w-md'>
          <Input
            type='text'
            placeholder='Todo Description'
            name='todoDescription'
            value=''
          />
        </div>
        <Button text='Add Todo' onClick={() => console.log('first')} />
      </div>
    </div>
  );
}

export default AddTodo;
