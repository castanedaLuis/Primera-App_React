import React,{ Component} from 'react';


export default class TaskForm extends Component{

    state ={
        title:"",
        description:""
    }

    onSubmit =(e) =>{
        this.props.addTask(this.state.title,this.state.description);
        //console.log(this.state)
        e.preventDefault();

    }
    onChange = (e) =>{
        console.log(e.target.value,e.target.name);
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Escribe una tarea" name="title" onChange={this.onChange} value={this.state.title}></input>
            <br />
            <br />
            <textarea placeholder="Escribe una descripción" name="description" onChange={this.onChange} value={this.state.description}></textarea>
            <input type="submit"></input>
        </form>
    }

}


