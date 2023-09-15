'use client';

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";


const TodoCard = ({ item }) => { 
  
  
    return (
      <div className='todoCard'>
        <p>{item}</p>
      </div>
    )
  
  }
  
  export default TodoCard;