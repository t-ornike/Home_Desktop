

function UpDown(props) {
    
    const todosCopy = [...props.todos];
    const setTodos = props.setTodos;

    function handleUp(todo){
        const index = todosCopy.findIndex((eachTodo)=>eachTodo.id === todo.id);
        if (index > 0) {
            const todoToDown = todosCopy.splice(index-1, 1, todo);
            todosCopy[index] = todoToDown[0];
            setTodos(todosCopy);
        }
    }

    function handleDown(todo) {
        const index = todosCopy.findIndex((eachTodo)=>eachTodo.id === todo.id);
        if (index < todosCopy.length - 1) {
            const todoToUp = todosCopy.splice(index+1, 1, todo);
            todosCopy[index] = todoToUp[0];
            setTodos(todosCopy);
        }
    }
    return (
    <div>
        <button value='up' onClick={()=>handleUp(props.todo)}>UP</button>
        <button value='down' onClick={()=>handleDown(props.todo)}>DOWN</button>
    </div>
    )
}

export default UpDown