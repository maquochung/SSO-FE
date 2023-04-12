export const ADD_TODO="ADD_TODO";
export const COMPLETED_TODO="COMPLETED_TODO";
export const REMOVE_TODO="REMOVE_TODO";
export const UPDATE_TODO="UPDATE_TODO";
export const DELETE_ALL="DELETE_ALL";
export const VIEW_ALL="VIEW_ALL";
export const VIEW_ACTIVE="VIEW_ACTIVE";

export const addTodo=(id,text)=>{
    let task={
        id: id,
        text: text,
        completed: false
    }
    return {
        type:ADD_TODO,
        payload: task
    }
}

export const removeTodo=(id)=>{
    return{
        type:REMOVE_TODO,
        payload:id
    }
}

export const updateTodo=(payload)=>{
    return{
        type:UPDATE_TODO,
        payload
    }
}

export const completedTodo=(payload)=>{
    return{
        type: COMPLETED_TODO,
        payload
    }
}

export const deleteAll=()=>{
    return{
        type: DELETE_ALL
    }
}

export const viewAll=(payload)=>{
    return{
        type: VIEW_ALL,
        payload
    }
}

export const viewActive=(payload)=>{
    return{
        type:VIEW_ACTIVE,
        payload
    }
}
