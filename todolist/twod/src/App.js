import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
constructor(props){
  super(props);
  this.state={
    char:'',
  };
  this.todoTask=this.todoTask.bind(this);
  this.addNote=this.addNote.bind(this);
}
todoTask(value)
{
  this.setState({
  char:value,
  });
}
addNote()
{
  this.props.todoshow(this.state.char);
  this.setState({
    char:''
  })
}
  render() {
    return (
      <div className="App">
        <div className="header">
        <input type="text" className="input" maxLength="240"  value={this.state.char}  onChange={(event) => this.setState({char:event.target.value})}  placeholder="Add todo..."/>
        <button  className="btn" onClick= {this.addNote} >Add</button>
        <h3 className="total">total char:{240-((this.state.char).length)}</h3></div>
      </div>
    );
  }
}
class Todo extends Component {
  constructor()
  {
    super();
    this.state={
      note:'',
      item:[
         {
           'name':'nandan'
         }
      ]
    };
    this.textshow=this.textshow.bind(this);
    this.delete=this.delete.bind(this);
  }
  textshow(char)
  {
    if(char !='')
    {
    this.setState({
      note:char,
      item: [...this.state.item,char]
    })
  }
  }
  delete()
  {
    this.setState({
      char:this.state.textshow
    })
  }
  render() {
    return (
      <div className="mainbody">
     <div className="text">
      <App todoshow= {this.textshow}/>
      <div className="task-value">
      <ul>
      {this.state.item.map((item,index) => (
        <li key={index}>
      < input type="checkbox"onClick="" />{item.name}
      <button className="delete" >delete</button></li> ))}
      </ul>
      </div>
      </div>
    </div>
    )
  }
}
export default Todo;