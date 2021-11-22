import TaskInput from 'components/UI/TaskInput.js';
import TaskList from 'components/Task/TaskList.js';

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl mb-6'>TODO List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
