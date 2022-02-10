import { useState } from 'react';
import PropTypes from 'prop-types';
import { NEW_TODO } from '../../utils/data';
import { VscAdd } from 'react-icons/vsc';
import './TodoForm.css';

const TodoForm = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState(NEW_TODO);
  const [hasError, setHasError] = useState(false);

  const isDisabled = !newTask.name ? true : false;

  function handleChange(e) {
    setNewTask({
      id: tasks.length + 1,
      name: e.target.value,
      done: false
    });
  }

  function addNewTask(e) {
    e.preventDefault();
    if (isDisabled) {
      setHasError(true);
    } else {
      setHasError(false);
      setTasks([newTask, ...tasks]);
      setNewTask(NEW_TODO);
    }
  }

  return (
    <form className="main__form form">
      <input
        id="taskName"
        className="form__input"
        type="text"
        name="task"
        value={newTask.name}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="taskName" className="form__label">
        New task
      </label>
      <button
        className={`btn form__btn ${isDisabled && 'from__btn--disabled'}`}
        aria-label="Submit form"
        type="submit"
        onClick={addNewTask}>
        <VscAdd className="btn__icon--large" />
      </button>
      {hasError && (
        <small className="form__error-msg">Cannot send empty form.</small>
      )}
    </form>
  );
};

TodoForm.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired
};

export default TodoForm;
