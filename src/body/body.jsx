import React, { Component } from 'react'
import './body.css'
import apple from './picture/apple.png'
import apple3 from './picture/apple3.jpg'
import appo1 from './picture/appo1.jpg'
import appo2 from './picture/appo2.jpg'
import huawei from './picture/huawei.png'
import huawei2 from './picture/huawei2.jpg'
import oppo from './picture/oppo.jpg'
import rongyao from './picture/rongyao.jpg'
import rongyao2 from './picture/rongyao2.jpg'
import sanxing from './picture/sanxing.jpg'
import sanxing2 from './picture/sanxing2.jpg'
import vivo from './picture/vivo.jpg'
import vivo2 from './picture/vivo2.jpg'
import xiaomi from './picture/xiaomi.jpg'
import xiaomi3 from './picture/xiaomi3.jpg'

const data = [       
                 {  picture: apple,
                    number:   '4999',
                    text1: 'HUAWEI HUAWEI Mate 20 X',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:apple3,
                    number:     '3999',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:appo1,
                    number:     '5999',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:  appo2,
                    number:    '4988',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: huawei,
                    number:     '4296',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                  {  picture:huawei2,
                    number:      '8888',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: oppo,
                    number:      '6199',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:  rongyao,
                    number:     '5199',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: rongyao,
                    number:     '999',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:sanxing,
                    number:     '6099',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },

                  {  picture: sanxing2,
                    number:     '1599',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: vivo,
                    number:     '1399',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: vivo2,
                    number:     '3999',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture:  xiaomi,  
                    number:     '4099',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                {  picture: xiaomi3,
                    number:     '2099',
                    text1: ' Apple/苹果 iPhone XS Max',
                    text2:'仿生芯片',
                    shop:'苏宁易购官方旗舰店',
                    gou:'3455'
                },
                    ]

export default class Body extends Component {
    
    recursion =(data)=>{
         return(
             <div>
                 {data.map((item,index)=>{
                     return(
                         <div className='box'>
                        <img src={item.picture} alt="123" width='190' height='190' key={index}/>
                        <p className='number'>￥{item.number}</p>
                        <p className='text'>{item.text1}</p>
                        <p className='text2'>{item.text2}</p>
                        <p className='shop'>{item.shop}</p>
                        </div>
                     )
                 })}
             </div>
         )
    }
    render() {
        return (
            <div>
                 {this.recursion(data)}
            </div>
        )
    }
}
