import React from 'react';
// 引入天猫首页
import Tianmao from './tianmao';
// 引入搜索栏
import Search from './search';
// 引入电器城首页
import Navrow from './navrow/index';
// 引入品牌分类
import Brand from './brand/index1';
import './index.css';

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Tianmao></Tianmao>
        <Search></Search>
        <Navrow></Navrow>
        <Brand></Brand>
      </React.Fragment>
    );
  }
}
