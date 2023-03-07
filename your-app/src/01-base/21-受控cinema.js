import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
    constructor(){
        super()

        this.state = {
            cinemaList:[],
            mytext:""
        }
     
        axios({
            url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method:"get",
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res=>{
            console.log(res.data.data.cinemas)

            this.setState({
                cinemaList:res.data.data.cinemas
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.mytext}
                <input value={this.state.mytext} onChange={(evt)=>{
                    // 这后面的也会更新
                    this.setState({
                        mytext:evt.target.value
                    })
                }}/>
                {
                    this.getCinemaList().map(item=>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dd>{item.address}</dd>
                        </dl>    
                    )
                }
            </div>
        )
    }

    getCinemaList(){
        return this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.state.mytext.toUpperCase()) || 
            item.address.toUpperCase().includes(this.state.mytext.toUpperCase())
        )
    }
}
