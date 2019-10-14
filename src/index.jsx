import React, { Component } from 'react'
//引入头部
import Header from './header/index'
//头部样式
 import './header/index.css'
 //引入身体
 import  Body from './body/body'
 //引入身体样式
 import './body/body.css'
 //引入底部
 import Footer from './footer/index'
 import './footer/index.css'
export default class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Body></Body>
                <div className='margintop'>
                <Footer></Footer> 
                </div>
                 
            </div>
        )
    }
}
