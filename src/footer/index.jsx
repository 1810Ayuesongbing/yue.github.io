import React from "react";
import "./index.css";
export default () => {
  return (
    <>
      {/* 搜索栏 */}
      <div className="ysb-div-001">
        <input type="text" className="ysb-input-001" />
        <button className="ysb-btn-001">搜索</button>
      </div>
      {/* 文字栏 */}
      <div className="ysb-div-002">
        <p className="ysb-p">
          喵~在此反馈您的意见和建议吧,
          <a href="#" className="ysb-a">
            立刻反馈
          </a>
        </p>
      </div>
      {/* 天猫直送 */}
      <div className="ysb-div-003">
        <ul className="flex">
          <li className="div-li-001">
            <img src={require("./img/tianmaozhisong.png")} />
          </li>
          <li className="div-li-001">
            <img src={require("./img/songhuoruhu.png")} />
          </li>
          <li className="div-li-001">
            <img src={require("./img/yuyueanzhuang.png")} />
          </li>
          <li className="div-li-001">
            <img src={require("./img/zhihuanbuxiu.png")} />
          </li>
        </ul>
      </div>
      {/* 横线 */}
      <hr
        style={{
          width: "1200px",
          height: "1",
          color: "gray",
          margin: "0 auto"
        }}
      />
   <div className='body-body'>
                <div className='body-main'>
                    <dl>
                        <dt>
                            <span>
                                购物指南
                            </span>
                        </dt>
                        <dd>
                            <a href="#">免费注册</a>
                            <a href="#">开通支付宝</a>
                            <a href="#">支付宝充值</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>
                                电器城保障
                            </span>
                        </dt>
                        <dd>
                            <a href="#">花呗分期</a>
                            <a href="#">预约配送</a>
                            <a href="#">送货入户</a>
                            <a href="#">全国联保</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>
                                支付方式
                            </span>
                        </dt>
                        <dd>
                            <a href="#">支付宝快捷支付</a>
                            <a href="#">支付宝余额付款</a>
                            <a href="#">支付宝钱包付款</a>
                            <a href="#">货到付款</a>
                            <a href="#">新人支付</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>
                                商家服务
                            </span>
                        </dt>
                        <dd>
                            <a href="#">入住天猫电器城</a>
                            <a href="#">加入电器城服务保障</a>
                            <a href="#">电器城喵言喵语圈子</a>
                            <a href="#">电器城商家管理规范</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <span>
                                手机电器城
                            </span>
                        </dt>
                        <dd>
                            <a href="#" style={{width: '105px', height: '105px'}}>
                                <i id='iii'>
                                </i>
                            </a>
                        </dd>
                    </dl>
                </div>
            </div>











      <div className='body-footer'>
                <div>
                    <p className='firstp'>
                        <a href="#">关于天猫</a>
                        <a href="#">帮助中心</a>
                        <a href="#">开放平台</a>
                        <a href="#">诚聘英才</a>
                        <a href="#">联系我们</a>
                        <a href="#">网站合作</a>
                        <a href="#">法律声明</a>
                        <a href="#">隐私权政策</a>
                        <a href="#">知识产权</a>
                        <a href="#">廉政举报</a>
                    </p>
                    <p className='secondp'>
                        <a href="">阿里巴巴集团</a>
                        <a href=""> | 淘宝网</a>
                        <a href=""> | 天猫</a>
                        <a href=""> | 聚划算</a>
                        <a href=""> | 全球速卖通</a>
                        <a href=""> | 阿里巴巴国际交易市场</a>
                        <a href=""> | 1688</a>
                        <a href=""> | 阿里妈妈</a>
                        <a href=""> | 飞猪</a>
                        <a href=""> | 阿里云计算</a>
                        <a href=""> | AliOS</a>
                        <a href=""> | 阿里通信</a>
                        <a href=""> | 万网</a>
                        <a href=""> | 高德</a>
                        <a href=""> | UC</a>
                        <a href=""> | 友盟</a>
                        <a href=""> | 虾米</a>
                        <a href=""> | 钉钉</a>
                        <a href=""> | 支付宝</a>
                    </p>
                    <div>
                        <p className='footerp'>
                            <span>增值电信业务经营许可证：
    </span>
                            <span>浙B2-20110446</span>
                            <span style={{marginLeft: '72px'}}>市场名称登记证：工商网市字3301004119号</span>
                            <span style={{marginLeft: '72px'}}>出版物网络交易平台服务经营备案证： 新出发浙备字第001号</span>
                            <br/>
                            <span>互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com</span>
                            <span style={{marginLeft: '72px'}}>互联网药品信息服务资质证书编号：</span>
                            <span>浙-（经营性）-2017-0005</span>
                            <span style={{marginLeft: '72px',float:'left'}}>
                                <i id='iiii'>
                                </i>
                                <span>浙公网安备 33010002000120号</span>
                            </span>
                            <span>医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span>
                            <span style={{marginLeft: '72px'}}>互联网药品交易服务资格证书：国A20150001</span>
                            <span>浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>
                            <br/>
                            <span>12318举报</span>
                            <br/>
                            <span>© 2003-2019 TMALL.COM 版权所有</span>
                        </p>
                    </div>
                </div>
            </div>
    </>
  );
};
