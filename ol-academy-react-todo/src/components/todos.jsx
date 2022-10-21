import React from 'react'
import Editor from './editor'



export default class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            showError: false,
            todos: [
                {id:1, name:'first', isDone:false, showEdit:false},
                {id:2, name:'second', isDone:false, showEdit:false},
                {id:3, name:'third', isDone:false, showEdit:false},
            ]
        }
    }

    handleInput = (event) => {
        this.setState({ showError: false, inputValue: event.target.value })
    }

    handleAdd = (todoName) => {
        let myTodos = this.state.todos;
        let alreadyExists = myTodos.find( (todo) => todo.name === todoName);
        console.log(alreadyExists, 'aqaa')
        if (!alreadyExists) {
            let numberOfTodos = myTodos.length+1;
            myTodos.push({ id:numberOfTodos, name:todoName, isDone:false, showEdit:false });
            this.setState({ inputValue: '', todos: myTodos });
        } else {
            this.setState({ showError: true })
        }
    }

    handleDelete = (id) => {
        let filteredState = this.state.todos.filter( (todo) => todo.id !== id);
        this.setState({ todos:filteredState })
    }

    handleEdit = (id) => {
        let todoForEdit = this.state.todos.map( (todo) => {
            if (todo.id === id) todo.showEdit = true; return todo;
        } )
        this.setState({ todos: todoForEdit });
    }

    handleCloseEditor = (id) => {
        let todoWithoudEditor = this.state.todos.map( (todo) => {
            if (todo.id === id) todo.showEdit = false; return todo;
        } )
        this.setState({todos:todoWithoudEditor});
    }

    handleUpdate = (updatedTodo) => {
        let todosAfterUpdate = this.state.todos.map( (todo) => {
            if (updatedTodo.id === todo.id) {
                todo = updatedTodo;
            }
            return todo;
        } )
        this.setState( { todos:todosAfterUpdate } )
    }

    handleCheck = (id) => {
        let todosAfterCheck = this.state.todos.map( (todo) => { if (todo.id === id) {
                              todo.isDone === false ? todo.isDone = true : todo.isDone = false; }
                              return todo })
        this.setState({ todos: todosAfterCheck })
    }

    handleUp = (todo) => {
        let myTodos = this.state.todos
        let currentTodoIndex = myTodos.indexOf(todo);
        if (currentTodoIndex !== 0) {
            let wantedTodoIndex = currentTodoIndex - 1;
            let tempRemovedTodo = myTodos.splice(wantedTodoIndex,1,myTodos[currentTodoIndex]);
            myTodos[currentTodoIndex] = tempRemovedTodo[0];
        }
        this.setState({ todos:myTodos });
    }

    handleDown = (todo) => {
        let myTodos = this.state.todos
        let currentTodoIndex = myTodos.indexOf(todo);
        if (currentTodoIndex !== myTodos.length - 1) {
            let wantedTodoIndex = currentTodoIndex + 1;
            let tempRemovedTodo = myTodos.splice(wantedTodoIndex,1,myTodos[currentTodoIndex]);
            myTodos[currentTodoIndex] = tempRemovedTodo[0];
        }
        this.setState({ todos:myTodos });
    }

    handleDeleteAll = () => {
        this.setState({ todos: [] });
    }

    handleResolved = () => {
        let notDoneTodos = this.state.todos.filter( (todo) => !todo.isDone );
        this.setState({ todos: notDoneTodos });
    }
    
    render() {
        return <>

            <input type="text" placeholder={this.state.inputValue} value={this.state.inputValue} onChange={this.handleInput}/>
            { this.state.showError && alert('this todo already exists, enter another !')}
            { this.state.inputValue && <button onClick={()=>this.handleAdd(this.state.inputValue)}>Add</button> }

            {this.state.todos.length > 0 && 
            <ul>
                { this.state.todos.map( (todo) => 
                    <li key = {todo.id}>
                        {todo.isDone === false && <p>{todo.name}</p>}
                        {todo.isDone === true  && <h1>{todo.name}</h1>}
                        <div>
                            <button onClick={()=>this.handleDelete(todo.id)}>Delete</button>
                            <button onClick={()=>this.handleEdit(todo.id)}>Edit</button>
                            {todo.showEdit && 
                                <div> 
                                    <Editor todo = {todo} handleUpdate = {()=>this.handleUpdate(todo)}/>
                                    <button onClick={()=>this.handleCloseEditor(todo.id)}>Close Editor</button>
                                </div>
                            }
                        </div>
                        <div>
                            {!todo.isDone && <label htmlFor="checkbox">Done</label>}
                            <input type="checkbox" onChange={()=>this.handleCheck(todo.id)} id="checkbox"/>
                        <div>
                                <button value='up' onClick={()=>this.handleUp(todo)}>&#8679;</button>
                                <button value='down' onClick={()=>this.handleDown(todo)}>&#8681;</button>
                            </div>
                            
                        </div>
                    </li>
                
                ) }
            </ul>
        }
        <div>
            <button onClick={()=>this.handleDeleteAll()}>Delete All Todo's</button>
            <button onClick={()=>this.handleResolved()}>Delete resolved todo's</button>
        </div>

        </>
    }
}