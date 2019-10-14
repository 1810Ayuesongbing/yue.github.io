import React, { Component } from 'react';
import './index.css';
class index extends Component {
  render() {
    let imgs = [
      { src: require('./imgs/1.jpg') },
      { src: require('./imgs/2.png') },
      { src: require('./imgs/3.png') },
      { src: require('./imgs/4.jpg') },
      { src: require('./imgs/5.png') },
      { src: require('./imgs/6.png') },
      { src: require('./imgs/7.png') }
    ];
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
                <div className="brands-l-r1">
                  {imgs.map((item, index) => {
                    return (
                      <img
                        src={item.src}
                        alt=""
                        width="90"
                        height="40"
                        key={index}
                      />
                    );
                  })}
                </div>
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
