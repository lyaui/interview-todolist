import Button from 'components/UI/Button.js';

const TaskItem = ({ task }) => {
  const { isCompleted } = task;

  const buttonStyle = isCompleted
    ? 'bg-gray-200 cursor-not-allowed'
    : 'bg-green hover:bg-green-dark';

  const taskTextStyle = isCompleted && 'text-gray-400 line-through';

  return (
    <li className='flex items-center py-2'>
      <Button
        className={`${buttonStyle} mr-3`}
        onClick={() => alert('hello')}
        disabled={isCompleted}
      >
        完成
      </Button>
      <p className={taskTextStyle}>{task.content}</p>
    </li>
  );
};

export default TaskItem;
