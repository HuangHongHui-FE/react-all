import React, { Component } from 'react'
const Tabbar = (props)=>{

    return <div>
        <ul>
            {
                props.list.map( (item,index)=>
                <li key={item.id} className={props.current=== index? 'active':''} onClick={()=>props.myevent(index)}>{item.text}</li>    
                )
            }
        </ul>
    </div>
}

export default Tabbar