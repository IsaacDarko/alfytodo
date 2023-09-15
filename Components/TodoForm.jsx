"use client"

import React from 'react';
import { useState, useEffect } from 'react';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const [tasksArray, setTasksArray] = useState([]);
    const today = new Date();

    const inputChange = (e) => {        
        setTask(e.target.value);
    }

    const inputSubmit = async(e) => {
      e.preventDefault();
       // if (task.trim()) {
       //   setTasksArray([...tasksArray, task]);
       //   setTask('');

      console.log("attempting to save item to db");
      console.log(task);
      try{
          const response = await fetch("/api/todos/new", {
              method: "POST",
              body: JSON.stringify({
                  item: task,
                  status: false,
                  time: today.getTime()
              })
          })
          if(response.ok){
              alert("task saved successfully")
          }
      }catch(err){
          console.log(err);
      }
    }

    return (
        <div>
          <form >
            <input className='todo_input' type="text" value={task} onChange={ inputChange } placeholder="Enter a task todo" />
            <button className='submitBtn' type="submit" onClick={(e) => inputSubmit(e)}>Add task</button>
          </form>
          
        </div>
      );
}

export default TodoForm