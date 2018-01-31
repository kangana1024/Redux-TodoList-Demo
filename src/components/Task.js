import React, { Component } from 'react';
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List} from 'antd';

class TaskList extends Component {
    state = {  }
    render() {
        let {listItem,delEvent} = this.props;
        return (
            <List
              bordered
              dataSource={listItem}
              renderItem={(item,index) => (
                <List.Item actions={[<a href="#" onClick={()=>{console.log(index);delEvent(index)}}><Icon type="close-circle" style={{ fontSize: 16, color: 'rgb(255, 145, 0)' }} /></a>]}>
                    {item}
                </List.Item>
            )}
            />
        );
    }
}

export default TaskList;