// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import './App.css';

var App = React.createClass({
  getInitialState: function() {
       return {
           exerciseData: []
       };
   },
  componentDidMount(){


    var _this = this;
    this.serverRequest =
      axios
        .get("https://wger.de/api/v2/exercise/?equipment=3&format=json&key=8a8d907c707355aa8a5cf2f0322726f58d7af3e0%3Fmuscles%3D1&language=2")
        .then(function(result) {
          console.log(result.data.results);
          _this.setState({
            exerciseData: result.data.results
          });
        })



  },
  render: function() {
    var userList = this.state.exerciseData.map(function(data, index) {
       return (
           <div key={index} style={{ background: '#ECECEC', padding: '30px' }}>
              <Card title={data.name} bordered={false} >
                <p>Muscle group {data.equipment[0]}</p>
              </Card>
            </div>
           );
         });

    return (
      <div className="App">
        <h2>Fitness Tracker</h2>
        <Row>
        <Col span={12} offset={6}>
          {userList}
        </Col>
      </Row>
      </div>
    );
  }
});

export default App;
