// 天猫nav
import React from 'react';
import './index.css';
export default () => {
  return (
    <div className="tianmao">
      <div className="flex nav">
        {/*header左边 天猫首页 */}
        <ul className="flex tianmao-left">
          <li>
            <i className="mui-global-iconfont">󰄫</i> 天猫首页
          </li>
          <li>
            <span> 喵，欢迎来天猫</span>
          </li>
          <li>请登录</li>
          <li>免费注册</li>
        </ul>
        {/* header右边 我的淘宝 */}
        <ul className="flex tianmao-right">
          <li>我的淘宝</li>
          <li>购物车0件</li>
          <li>收藏夹 |</li>
          <li>手机版</li>
          <li>淘宝网</li>
          <li>商家支持</li>
          <li>网站导航</li>
        </ul>
      </div>
    </div>
  );
};
