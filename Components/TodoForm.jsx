"use client"

import React from 'react';
import { useState, useEffect } from 'react';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [tasksArray, setTasksArray] = useState([]);

    const inputChange = (e) => {        
        setTask(e.target.value);
    }

    const inputSubmit =() => {
        e.preventDefault();
        if (task.trim()) {
          setTasksArray([...tasksArray, task]);
          setTask('');
        }
    }

    return (
        <div>
          <form onSubmit={inputSubmit}>
            <input className='todo_input' type="text" value={task} onChange={ inputChange } placeholder="Enter a task todo" />
            <button type="submit">Add task</button>
          </form>
          
        </div>
      );
}

export default TodoForm