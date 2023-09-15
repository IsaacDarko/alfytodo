'use client';

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const TodoCard = ({ todo }) => { 
  
  
    return (
      <div className='todoCard'>
        <h3>{todo.item}</h3>
        <h6>{todo.done}</h6>
        <p>{todo.time}</p>
      </div>
    )
  
  }
  
  export default TodoCard;