import './Home.less'
import { useState, useEffect } from 'react';
import { getWeiXin } from '../../http/api';
function Home(props) {
    let [weiXinArr, setWeiXinArr] = useState([]);

    let user = ''
    useEffect(() => {
        async function getData() {
            let weixin = await getWeiXin();
            setWeiXinArr(weixin.data)
        }
        getData()
    }, [])


    function setUser(e){
        user = e.target.value
    }

    function setSession(){
        sessionStorage.setItem("user", user);
    }

    return (
        <div className='home_con'>
            <b>什么身份？</b>
            <input type="text" onChange={(e) => setUser(e)} />
            <b onClick={() => setSession()}>存储</b>
            {
                weiXinArr.map((item, index) => {
                    return (
                        <div className="home_item" key={index}>
                            <div className='home_item_left'>
                                <img src={item.imgSrc} alt="" />
                            </div>
                            <div className='home_item_middle'>
                                <div className='home_item_middle_top'>{item.title}</div>
                                <div className='home_item_middle_bottom'>{item.content}</div>
                            </div>
                            <div className='home_item_right'>
                                <div className='home_item_right_top'>{item.time}</div>
                                <div className='home_item_right_bottom'>右</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Home;