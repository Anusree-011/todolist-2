import react from 'react'
import { useState } from 'react';



function Todolist() {
    
    const[task , setTask]= useState("");
    const[taskList,setTaskList]=useState([]);

    function addTask(){
        // let arr=taskList
        // arr.push(task)
        // setTaskList(arr)

        setTaskList((prev)=> [...prev,task])



        setTask("")
    }
   
  return (
    <>
        
        <div>
            
            <input type="text" value= {task} onChange={(e)=>setTask(e.target.value)}></input>
            <button onClick={addTask}>SAVE</button>
            
        </div>

        

        {taskList.map((item,i)=>
             <li key={i}> {item} </li>
        )}
        

        
    </>
  );
}

export default Todolist;
