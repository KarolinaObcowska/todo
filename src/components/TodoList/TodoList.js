import { useState } from 'react';
import { TODO } from '../../utils/data';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState(TODO);
  const [filter, setFilter] = useState('All');
  const [isActive, setIsActive] = useState(0);

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.done,
    Completed: (task) => task.done
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filteredTasks = filter ? tasks.filter(FILTER_MAP[filter]) : tasks;

  return (
    <section className="main">
      <h2 className="main__title">Todo List</h2>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <div className="main__search">
        {FILTER_NAMES.map((btnName, index) => (
          <button
            className={`btn search__btn ${
              isActive === index ? 'search__btn--active' : ''
            }`}
            key={btnName}
            id={index}
            onClick={() => {
              setFilter(btnName);
              setIsActive(index);
            }}>
            {btnName}
          </button>
        ))}
      </div>
      <ul className="todo-list">
        {filteredTasks.length ? (
          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              tasks={tasks}
              task={task}
              setTasks={setTasks}
            />
          ))
        ) : (
          <small className="todo-list__alt-text">
            You have not added any tasks yet.
          </small>
        )}
      </ul>
    </section>
  );
};

export default TodoList;
