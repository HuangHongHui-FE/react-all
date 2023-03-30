import '../Chat/Chat.less'

import Header from '../../components/Header/Header';

import {useEffect, useState} from 'react'

function ChatTogether() {

    let [value, setValue] = useState('')

    function iptChange(e){
        setValue(e.target.value)
    }


    function send(){

    }
    return (
        <>
            <Header title={666}></Header>

            <div className='chat'>
                {/* {
                    msgArr.map((item, index) => {
                        if (item.from.slice(-1) === user) {
                            return (
                                
                            )
                        } else if (item.from.slice(-1) === toUser) {
                            return (
                                
                            )
                        }
                    })
                } */}
                {/* <div className='chat_right' key={index}> */}
                <div className='chat_right'>
                    <div>444</div>
                    {/* <div>{timeFormat(item.time)}:{item.content}&lt;-{user}</div> */}
                </div>
                {/* <div className='chat_left' key={index}> */}
                <div className='chat_left'>
                    <div>666</div>
                    {/* <div>{toUser}-&gt;{item.content}: {timeFormat(item.time)}</div> */}
                </div>
            </div>

            <div className='chat_bottom'>
                <div>---</div>
                <input type="text" onChange={(e) => iptChange(e)} value={value} />
                <div onClick={() => send()}>发送</div>
            </div>
        </>
    )
}


export default ChatTogether;