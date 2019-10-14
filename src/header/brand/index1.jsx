import React, { Component } from 'react';
import './index.css';
class index extends Component {
  render() {
    return (
      <div className="brand flex">
        <div className="brand-t flex">
          <div className="brand-t-l flex">
            <p>全部&gt; </p>
            <input type="text" />
          </div>
          <div>
            <p>共202548190件相关商品</p>
          </div>
        </div>
        <div className="brand-b">
          {/* 品牌 */}
          <div className="brands flex">
            <div className="brands-left flex">
              <p className="brands-p">品牌</p>
              {/* 手机品牌图片 */}
              <div className="brands-l-r">
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1r23ZRXXXXXaxXXXXXXXXXXXX"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1Z.mzyMmTBuNjy1XbXXaMrVXa"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1gR9vsyrpK1RjSZFhXXXSdXXa"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1QkxTCXzqK1RjSZFCXXbbxVXa"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1lsMhLFXXXXb1XFXXSutbFXXX.jpg"
                    alt=""
                    width="100"
                    height="50"
                  />
                </a>
                <a href="#">
                  <img
                    src="//img.alicdn.com/bao/uploaded/TB1UWloLzTpK1RjSZKPXXa3UpXa"
                    alt=""
                    width="100"
                    height="50"
                    className="aaaaa"
                  />
                </a>
              </div>
            </div>
            <div className="brands-right flex">
              <p className="duoxuan">+多选</p>
              <p className="gengduo">更多</p>
            </div>
          </div>
          {/* 分类 */}
          <div className="cate flex">
            <div className="cate-l flex">
              <p className="cate-p">分类</p>
              <p className="catep">手机</p>
            </div>
            <div className="cate-r">
              <p>更多</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
