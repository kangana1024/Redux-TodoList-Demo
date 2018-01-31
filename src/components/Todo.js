import React, { Component } from 'react';

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List} from 'antd';

import TaskList from './Task'

export class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem: []
    }

    this.handleChangeText = this.handleChangeText.bind(this);

  }

  submitList = () => {
    this.props.addList(this.state.inputText);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  deletListTask = (index) =>{
    console.log(index);
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  render() {

    // const data = [
    //     'text 1',
    //     'text 2',
    //     'text 3',
    // ];

    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
        <Card style={{ width: 500 }}>
            <h1>To-do-list</h1>

            <div style={{ marginBottom:'10px'}}>
              <Input
                addonAfter={<Button type="primary" onClick={this.submitList}>Add</Button>}
                onChange={this.handleChangeText}
                value={this.state.inputText}
                onKeyPress={this.handleKeyPress}/>
            </div>
            <TaskList listItem={this.state.listItem} deletListTask={this.deletListTask} />
        </Card>
      );
    }
}
