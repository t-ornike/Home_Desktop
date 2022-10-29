import Reac, {useState} from "react";


function Editor(props) {
    // console.log(props)
    let handleUpdate = props.update;
    const [todo, setTodo] = useState(props.todo);
    
    function handleEditor(event) {
        setTodo({...todo, name:event.target.value})
    }

    return (
        <div>
            <input type="text" value = {todo.name} onChange={handleEditor} />
            <button onClick={()=>handleUpdate(todo)}>Update</button>
        </div>
    )
}

export default Editor