import React, { Component } from 'react';
import { addTodo, toggleTodo } from '../Actions/index';
import { connect } from 'react-redux';

class TodoList extends Component {
    state = {
        newTodo:''
    }

  changeHandler = e => this.setState({ newTodo: e.target.value })

  addTask = e => {
      e.preventDefault();
      this.props.addTodo(this.state.newTodo)
      this.setState({ newTodo: '' })
  }
  
  toggleTask = index => this.props.toggleTodo(index)

  render() {
    return (
      <>
        <div>
            {this.props.todoList.map((todo, index) => (
                <p key={index} onClick={() => this.toggleTask(index)} className={todo.completed && 'completed'}>{todo.text}</p>
            ))}
        </div>
        <input type='text' placeholder='Add Task Here' name='newTodo' value={this.state.newTodo} onChange={this.changeHandler} />
        <button onClick={this.addTask} >Add Task</button> 
      </>
    )
  }
}

const mapStateToProps = state => ({
    todoList: state.todos
});

export default connect(
    mapStateToProps,
    { addTodo, toggleTodo}
)(TodoList);