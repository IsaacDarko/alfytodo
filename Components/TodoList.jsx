'use client'

import TodoCard from "../components/TodoCard";
import TodoForm from "./TodoForm";


const TodoList = ({ data }) => {

  return(
    <div>
        <div className="todo form">
            <TodoForm />
        </div>


        <div className=" todolist mt-8 prompt_layout">
        {data.map((todo) => (
            <TodoCard 
            key={todo._id}
            item={todo.item}
            
            />
        ))}

        </div>

    </div>
  )
}

export default TodoList;