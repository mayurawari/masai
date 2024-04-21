import React, {useState} from "react";

export function Todo(){
    const [todos,setTodos]=useState([]);
    const [todoinput,setTodoinput]=useState("");
    const handletodo=()=>{
        

        setTodos([...todos,todoinput]);
        setTodoinput('');

    }

    const remove=(index)=>{
        let arr=[...todos]
        arr.splice(index,1);
        setTodos(arr);
    }

    return (
        <>
        <div>

        <div>
        <input type="text" value={todoinput} onChange={e=>setTodoinput(e.target.value)}/>
        <button onClick={handletodo}>Add</button>
        </div>
        <div>
            <ol>
                {todos.map((ele,index)=>{
                  return (
                  <li key={index}>todo:{ele}
                  <button onClick={remove}>Remove</button>
                  </li>
                  );
                })}
            </ol>
        </div>

        </div>
        </>
    )

}