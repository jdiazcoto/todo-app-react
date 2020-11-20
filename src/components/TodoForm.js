import React, {useState} from 'react'
import TodoItem from './TodoItem';






function TodoForm() {

    const[todos, setTodo] = useState({id:"", task:"",completed:false})

    function addTodo(){
       let newTodo = document.getElementById("todo").value;
       console.log(newTodo)
       if(newTodo !== "Todo Test"){
        setTodo([...todos, newTodo])
        }

    
    }
    return (
    <div>
        <div className="row">
            <div className="input-field">
                <div className="input-field col m4 offset-m4">
                    <input id="todo" type="text" className="validate" />
                    <label className="active" for="todo">Todo Task</label>
                 </div>   
                <div className="input-field col m4 ">
                    <button className="btn waves-effect waves-light"  onClick={addTodo} type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
        {todos.map(todo=> (
            <TodoItem todo = {todo}/>
            
        ))}
</div>
    )
}


export default TodoForm
