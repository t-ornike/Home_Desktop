import React, {useState} from "react";
import Editor from "./editor";
import UpDown from "./position";
import DeleteAll from "./deleteall";
import DeleteIsDone from "./delete_is_done"



 function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [showEdit, setShowEdit] = useState({show:false, todo:{}});
    const [showError, setShowError] = useState('');
    
    const todosCopy = [...todos];
    

    function handleInput(event) {
        setInputValue(event.target.value);
    }

    function handleAdd(inputValue) {

        let alreadyExist = todosCopy.find((todo) => {
            return todo.name === inputValue;
        })

        if (alreadyExist) setShowError(new Error('This todo already exists! Add another!'));
        else if (inputValue !== ''){
            let todoID = todos.length + 1;
            todosCopy.push({id:todoID, name:inputValue, isDone:false})
            setTodos(todosCopy);
            setInputValue('');
            setShowError('')
        }

    }

    function handleChekbox(id) {
        todosCopy.forEach((todo)=> {
            if(todo.id === id) todo.isDone ? todo.isDone = false : todo.isDone = true;
        })
        setTodos(todosCopy);
    }

    function handleShowEdit(todo) {
        setShowEdit({show:true, todo:todo});
    }

    function handleDelete(todo) {
        let indexForDelete = todosCopy.indexOf(todo);
        todosCopy.splice(indexForDelete,1);
        setTodos(todosCopy);
    }


    function handleUpdate(updatedTodo) {
        todosCopy.forEach((todo) => {
            if(todo.id === updatedTodo.id) todo.name = updatedTodo.name
        })
        setTodos(todosCopy);
        setShowEdit({show:false, todo:{}});
    }


    return (
        <div>
            {showError && <h1 style={{color: "red"}}>{showError.message} </h1>}
            <input type="text" value={inputValue} onChange={handleInput} />
            <button onClick={() => handleAdd(inputValue)}>Add</button>

            <ul className = "todo-list">
                {todos.map((todo) => 
                    <div key = {todo.id}>
                        <li> 
                            {todo.isDone &&  <h1 style={{color:'lime'}}>{todo.name}</h1> }
                            {todo.isDone ||  <h1 style={{color:'tomato'}}>{todo.name}</h1>}
                            <label htmlFor="Done">Done</label>
                            <input type="checkbox" id='Done' onChange={()=>handleChekbox(todo.id)}/>
                        </li>
                        <button onClick={()=>handleShowEdit(todo)}> Edit </button>
                        <button onClick={()=>handleDelete(todo)}> Delete </button>
                        <UpDown todo = {todo} todos = {todos} setTodos = {setTodos}/>
                    </div>
              
                )}
                 <div>
                    {showEdit.show&& <Editor todo={showEdit.todo} update={handleUpdate}/>}
                </div> 
            </ul>
            <div className="deleteAll">
                <DeleteAll todos = {todos} setTodos = {setTodos}/>
                <DeleteIsDone todos = {todos} setTodos = {setTodos}/>
            </div>
        </div>
    )
}

export default Todo;
 