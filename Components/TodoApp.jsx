'use client'

import { useState, useEffect } from "react";
import TodoList from "./TodoList";



    const TodoApp = () => {
        const [todos, setTodos] = useState([])

        useEffect(() => {
            const fetchTransactions = async () => {
              const response = await fetch('/api/todos');
              const data = await response.json();
              setTodos(data);
            }
        
            fetchTransactions();
          }, []);


        return (
            <div>

                <div>TodoApp</div>
                
                <TodoList 
                    data={todos}
                />

            </div>
        )


    }

export default TodoApp