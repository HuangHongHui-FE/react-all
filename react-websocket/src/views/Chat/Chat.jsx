import './Chat.less'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getMsg } from '../../http/api'

import { timeFormat } from '../../utils/timeFormat'
function Chat() {
    // 要发送的内容
    let value = '';
    let [msgArr, setMsgArr] = useState([])

    // 传参过来对应的用户
    let query = useLocation();
    let toUser = query.state.name.slice(-1);
    let user = sessionStorage.getItem('user');

    function send() {

    }

    async function getMsgFn(query) {
        let data = await getMsg(query);
        setMsgArr(data.data);
    }


    useEffect(() => {
        getMsgFn({ user, toUser });
    }, [])




    function iptChange(e) {
        value = e.target.value
    }
    return (
        <>
            <Header title="user1"></Header>

            <div className='chat'>
                {
                    msgArr.map((item, index) => {
                        if (item.from.slice(-1) === user) {
                            return (
                                <div className='chat_right' key={index}>
                                    <div>{timeFormat(item.time)}:{item.content}&lt;-{user}</div>
                                </div>
                            )
                        } else if (item.from.slice(-1) === toUser) {
                            return (
                                <div className='chat_left' key={index}>
                                    <div>{toUser}-&gt;{item.content}: {timeFormat(item.time)}</div>
                                </div>
                            )
                        }
                    })
                }
            </div>

            <div className='chat_bottom'>
                <div>---</div>
                <input type="text" onChange={(e) => iptChange(e)} />
                <div onClick={() => send()}>发送</div>
            </div>
        </>
    )
}





export default Chat;