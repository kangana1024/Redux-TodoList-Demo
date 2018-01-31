import React, { Component } from 'react'
import logo from './logo.svg'
import withRedux from "next-redux-wrapper"
import store from './libs/store'
import { Todo } from './components/Todo'
import {setTodoList,delTodoList} from './libs/actions/todo'
import './App.css';
import { bindActionCreators } from 'redux'
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List} from 'antd';

import TaskList from './components/Task'

class App extends Component {
  state = {
    inputText : ''
  }
  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }
  submitList = () => {
    this.props.setTodoList(this.state.inputText);
    this.setState({inputText:''})
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }
  render() {

    const { Header, Footer, Sider, Content } = Layout;
    let {todoList,delTodoList} = this.props;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
        <Card style={{ width: 500 }}>
            <h1>To-do-list</h1>

            <div style={{ marginBottom:'10px'}}>
              <Input
                addonAfter={<Button type="primary" onClick={this.submitList.bind(this)}>Add</Button>}
                onChange={this.handleChangeText}
                value={this.state.inputText}
                onKeyPress={this.handleKeyPress}/>
            </div>
            <TaskList listItem={todoList} delEvent={delTodoList} />
        </Card>
      );
    }
}
const mapStateToProps = state => ({
  todoList:state.todo.todoList
})
const mapDispatchToProps = {
  setTodoList,
  delTodoList
}
export default withRedux(()=>store,mapStateToProps,mapDispatchToProps)(App)