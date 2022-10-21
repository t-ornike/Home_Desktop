import React from "react";



export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:this.props.todo,
        }
    }

    handleEditor = (event) => {
        this.props.todo.name = event.target.value;
        this.setState({ todo : this.props.todo})
    }


    render() {
        return <>
            <input type="text" placeholder={this.state.todo.name} onChange={this.handleEditor}/>
            <button onClick={()=>this.props.handleUpdate(this.state.todo)}>Update</button>
        </>
    }
}