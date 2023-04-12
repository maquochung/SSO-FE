import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo} from '../../Actions/Action';
import { useState } from 'react';

function AddTodo() {
    const [counter,setCounter]=useState(0);
    const [todo,setTodo]=useState('')
    //const todos=useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    
    const handleSubmitTodo=()=>{
        if (todo !=="")
        {
            dispatch(addTodo(counter,todo));
            setCounter(counter+1);
            setTodo('');
        }
    };
    console.log('todo:',todo);
    console.log('counter',counter);

  return (
    <div>
      <h2> Add Todo</h2>
      <form>
        <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='button' onClick={handleSubmitTodo}>Add</button>
      </form>
    </div>
  )
}

export default AddTodo;
