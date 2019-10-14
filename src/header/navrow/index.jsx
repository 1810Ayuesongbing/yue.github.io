import React, { Component } from 'react';
import './index.css';
class index extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="navrow flex">
          <div className="navrow-l flex">
            <p>电器城首页</p>
            <p>手机馆</p>
            <p>苏宁易购</p>
          </div>
          <div className="navrow-r flex">
            <p>电器城服务台</p>
          </div>
        </div>
        <div className="blank"></div>
      </React.Fragment>
    );
  }
}

export default index;
