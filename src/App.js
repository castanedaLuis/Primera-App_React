import React,{ Component} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';

import taks from  './examples/taks.json';
//componentes
import Taks from './components/Taks';
import TaskForm from './components/TaskForm';
//console.log(taks)
import Posts from './components/Posts';

/*COMPONENTE */
class App extends Component{

  state ={
    taks: taks
  }

  addTask = (title,description) =>{
    console.log(title, description)
    const newTak = {
      title : title,
      description: description,
      id: this.state.taks.length
    }
    console.log(newTak);
    this.setState({
      taks: [...this.state.taks,newTak]
    })
  }


  deleteTaks = (id) =>{
    const newTaks = this.state.taks.filter(tak => tak.id !== id)
    //console.log(newTaks)
    this.setState({
      taks: newTaks
    })
  }

  checkDone =(id) =>{
    const newTasks = this.state.taks.map(tak =>{
      if(tak.id === id){
        tak.done = !tak.done
      }
      return tak;
    });
    this.setState({
      taks: newTasks
    })
  }

  render(){
    return <div>  
            <Router>
              <Link to="/">Home</Link>
              <br/>
              <Link to="/Posts">Posts</Link>
              <Route exact paht="/" render={()=>{
                return <div>
                  <TaskForm addTask={this.addTask}/>
                  <Taks taks={this.state.taks} deleteTaks={this.deleteTaks} checkDone={this.checkDone}/>
                </div>
              }}>
              </Route>

              <Route path="/posts" Component={Posts}>

              </Route>
            </Router>
            <Posts/>
          </div>
  }
}

export default App;
