import { ADD_TODO,COMPLETED_TODO,DELETE_ALL,REMOVE_TODO, VIEW_ALL, VIEW_ACTIVE, UPDATE_TODO } from "../Actions/Action";

const initialSate={
    todo:"",
    todos:[],
}

const reducer=(state=initialSate,action)=>{
    switch(action.type){
        case ADD_TODO:
            return{
                todos:[
                    ...state.todos,{
                        id:action.payload.id,
                        text:action.payload.text,
                        completed:false
                    }
                ]
            }
            case REMOVE_TODO:
                return{
                    todos:[
                        ...state.todos.filter(todo=>todo.id!==action.payload)
                    ]
                }

            case UPDATE_TODO:
                return{
                    todos:[
                        ...state.todos,{
                            text: action.payload.text
                        }
                    ]
                }
            case COMPLETED_TODO:
                return state.map((todo)=>{
                    if(todo.id===action.payload.id){
                        return {
                            ...state.todos,
                                completed: true
                                // completed: !action.payload.completed
                        }
                    }
                    return todo;
                })


                // return{
                //     todos:[
                //         ...state.todos,{
                //             completed: !action.payload.completed}
                //     ]
                // }

            case DELETE_ALL:
                return {
                    todos:[]
                }
            case VIEW_ALL:
                return{
                    todos:[
                        ...state.todos
                            
                        
                    ]
                }
            case VIEW_ACTIVE:
                if(action.payload.completed===false)
                return{
                    todos:[
                        ...state.todos,{
                            action
                        }
                    ]

                }
                break
                
            default:
                return state;
    }
}
export default reducer;