type SelectProps = {};

function Select({}: SelectProps) {
  return (
    <select
      name='progress'
      id='progress'
      className='bg-neutral-50 px-4 py-2 rounded-lg shadow-md text-lg font-semibold focus:outline-none'
    >
      <option value='all'>All</option>
      <option value='completed'>Completed</option>
      <option value='uncompleted'>Uncompleted</option>
    </select>
  );
}

export default Select;
