

function DeleteIsDone(props) {
    const todos = props.todos;
    const setTodos = props.setTodos;
  

    function handleDeleteCompleted() {
        const notIsDone = todos.filter((todo)=> todo.isDone === false);
        setTodos(notIsDone);
    }

    return (
        <> 
         {todos.find((todo)=>todo.isDone) &&
            <button onClick={()=>handleDeleteCompleted()}>Delete Completed</button>}
        </>
    )
}

export default DeleteIsDone;