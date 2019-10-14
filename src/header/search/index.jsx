// 导航栏
import React, { Component } from 'react';
import './index.css';
class index extends Component {
  render() {
    return (
      <div className="mallw">
        <div className="mall flex">
          {/* 天猫logo */}
          <a href="#" className="a">
            <div className=" mallLoge flex">
              <h1 className="mallLoge1">天猫电器城</h1>
              <p className="mallLoge2">-3c.tmall.com</p>
            </div>
          </a>

          {/* 搜索框 */}
          <div className="serach flex">
            <div>
              <input
                type="text"
                placeholder="请输入关键字"
                title="请输入搜索关键字"
                className="input"
              />
              <button className="button">搜索</button>
            </div>
            <ul className=" flex list">
              <li className="list1">华为</li>
              <li>小米</li>
              <li>魅族</li>
              <li>荣耀</li>
              <li>华为手机</li>
              <li>vivo</li>
              <li>oppo</li>
              <li className="list2">三星</li>
            </ul>
          </div>
          <div className="kong"></div>
        </div>
      </div>
    );
  }
}

export default index;
