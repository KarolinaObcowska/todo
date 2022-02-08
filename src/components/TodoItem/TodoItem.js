import { AiOutlineCheck } from 'react-icons/ai';
import { ImBin2 } from 'react-icons/im';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ taskIndex, tasks, setTasks }) => {
  function toggleIsDone(index) {
    const isDone = tasks[index].done;
    tasks[index].done = !isDone;
    setTasks([...tasks]);
  }

  function removeTask(index) {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  return (
    <li
      className={`todo-list__item ${
        tasks[taskIndex].done && 'todo-list__item--done'
      }`}>
      <p className="todo-list__name">{tasks[taskIndex].name}</p>
      <div>
        <button className="btn" onClick={() => toggleIsDone(taskIndex)}>
          <AiOutlineCheck
            className={`btn__icon ${
              !tasks[taskIndex].done && 'btn__icon--hidden'
            }`}
          />
        </button>
        <button className="btn" onClick={() => removeTask(taskIndex)}>
          <ImBin2 className="btn__icon" />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  taskIndex: PropTypes.number.isRequired
};

export default TodoItem;
