import react from 'react'
import { useState } from 'react';



function Todolist() {
    
    const[task , setTask]= useState("");
   
  return (
    <>
        
        <div>
            
            <input type="text" value= {task} onChange={(e)=>setTask(e.target.value)}></input>
            <button>SAVE</button>
            
        </div>

        <p>{task}</p>

        
    </>
  );
}

export default Todolist;
