import { useTask } from 'context/tasks/index.js';
import TaskItem from 'components/Task/TaskItem.js';

const TaskList = () => {
  const {
    taskState: { tasks },
  } = useTask();
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem task={task} key={index} />
      ))}
    </ul>
  );
};

export default TaskList;
