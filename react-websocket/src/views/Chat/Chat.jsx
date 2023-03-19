import './Chat.less'
import Header from '../../components/Header/Header'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getMsg } from '../../http/api'

import { timeFormat } from '../../utils/timeFormat'

import socketIO from 'socket.io-client';



function Chat() {
    // 要发送的内容
    let [value, setValue] = useState('');
    let [socket, setSocket] = useState();
    let [msgArr, setMsgArr] = useState([]);

    // 传参过来对应的用户
    let query = useLocation();
    let toUser = query.state.name.slice(-1);
    let user = sessionStorage.getItem('user');

    // socket用·
    let eventName = `${user}to${toUser}`;

    async function getMsgFn(query) {
        let data = await getMsg(query);
        setMsgArr(data.data);
    }


    useEffect(() => {
        console.log("useeffect")
        getMsgFn({ user, toUser });

        // 进入页面链接一次
        socketStart();
    }, [])




    function iptChange(e) {
        setValue(e.target.value);
    }

    function send() {
        let msg = {
            "to": ['user_' + toUser],
            "from": 'user_' + user,
            "content": value,
            "time": new Date().getTime()
        }
        console.log(eventName)
        socket.emit(eventName, msg);

        // 解决更新数组无法更新
        setMsgArr([...msgArr, msg]);
    }


    function socketStart() {
        socket = socketIO.connect('http://localhost:8000');
        // socket
        socket.on(eventName, (data) => {

            setMsgArr(data);

        });
        setSocket(socket);
    }



    return (
        <>
            <Header title={toUser}></Header>

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
                <input type="text" onChange={(e) => iptChange(e)} value={value}/>
                <div onClick={() => send()}>发送</div>
            </div>
        </>
    )
}





export default Chat;