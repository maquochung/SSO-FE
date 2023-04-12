//import React, { useState } from 'react'
import { completedTodo, removeTodo, viewAll } from '../../Actions/Action';
import {useSelector,useDispatch} from 'react-redux'
import '../../style/style.css'
import { deleteAll } from '../../Actions/Action';

function ListTodo() {
  const todos=useSelector((state)=>state.todos);
  const dispatch = useDispatch();
  //const [updateTodo,setUpdateTodo]=useState('');
  //console.log('updatetodo',updateTodo);
  // const handleUpdateTodo=(up)=>{
  //   if (updateTodo.id===up.id)
  // }

  console.log('todos', todos);
  return (
    <div className='list'>
        <div className='list-todo'>
        <ul className='ul-item'>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <span className={`${todo.completed ? "complete" : ""}`}>{todo.text}</span>
                    <input type='checkbox'
                    onChange={(e)=>dispatch(completedTodo(todo))}
                    className='checkmark'/>
                    <button>Update</button>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))}
            <div className='btn-onclick'>
              <button type='submit'>View Active</button>
              <button type='submit'>View Completed</button>
              <button type='submit' onClick={()=>dispatch(viewAll())}>View All</button>
              <button type='submit' onClick={()=>dispatch(deleteAll())}>Delete All</button>
            </div>
        </ul>
      </div>
      
    </div>
  )
}
export default  ListTodo;
