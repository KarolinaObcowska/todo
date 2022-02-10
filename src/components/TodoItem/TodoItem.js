import { AiOutlineCheck } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ tasks, setTasks, task }) => {
  function toggleIsDone(task) {
    const isDone = task.done;
    task.done = !isDone;
    setTasks([...tasks]);
  }

  function removeTask(task) {
    tasks.splice(tasks.indexOf(task), 1);
    setTasks([...tasks]);
  }

  return (
    <li className={`todo-list__item ${task.done && 'todo-list__item--done'}`}>
      <p className="todo-list__name">{task.name}</p>
      <div>
        <button
          className="btn"
          aria-label="Change status done/undone"
          onClick={() => toggleIsDone(task)}>
          <AiOutlineCheck
            className={`btn__icon ${!task.done && 'btn__icon--hidden'}`}
          />
        </button>
        <button
          className="btn"
          aria-label="Remove task"
          onClick={() => removeTask(task)}>
          <ImBin2 className="btn__icon" />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

export default TodoItem;
