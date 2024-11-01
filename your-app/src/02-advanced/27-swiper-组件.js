import React, { Component } from 'react'
import KSwiper from './swiper/Swiper'
import KSwiperItem from './swiper/SwiperItem'

import axios from 'axios'
export default class App extends Component {

    state = {
        list:[]
    }

    componentDidMount() {

        axios({
            url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=7398342",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                list:res.data.data
            })

        })
    }
    

    render() {
        return (
            <div>
                <KSwiper loop={true}>
                    {
                        this.state.list.map(item=>
                        <KSwiperItem key={item.bannerId}>
                            <img src={item.imgUrl} alt={item.name} style={{width:"100%"}}/>
                        </KSwiperItem>
                        )
                    }
                </KSwiper>
            </div>
        )
    }
}
