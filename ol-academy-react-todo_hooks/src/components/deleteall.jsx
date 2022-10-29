

function DeleteAll (props) {
    const setTodos = props.setTodos;
    const todos = props.todos;
    return (
        <>
        {todos.length > 0 && <button onClick={()=>setTodos([])}>Delete All Todos</button>}
        </>

    )
}


export default DeleteAll