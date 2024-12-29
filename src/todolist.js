import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    } else {
      alert("Please enter a task.");
    }
  };

  return (
    <div>
      <h1 className="to">Todo List</h1>
      <div className="flext">
        <input
          type="text"
          className="ints"
          placeholder="Enter your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn" onClick={handleAddTodo}>Add</button>
      </div>
      <div className='show'>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''} onClick={() => toggleComplete(index)}>
            {todo.text}
            <span onClick={(e) => { e.stopPropagation(); deleteTodo(index); }}> 
              ❌             
            </span>
          </li>
        ))}
      </ul>
      </div>      
    </div>
  );
}

export default TodoList;
