import './Friends.less'

import FriendsItem from '../../components/FriendsItem/FriendsItem';
import { getFriends } from '../../http/api'
import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Friends() {
    const navigate = useNavigate();
    let [friendsArr, setFriendsArr] = useState([]);
    let user = sessionStorage.getItem('user');

    useEffect(() => {
        async function getData() {
            friendsArr = await getFriends({ user });
            setFriendsArr(friendsArr.data)
        }
        getData();
    }, [])

    // 跳转进
    function goChat(name) {
        navigate('/chat', {
            replace: false,
            state: {
                name: name
            }
        })
    }

    return (
        <div className="friends_con">
            {
                friendsArr.map((item, index) => {
                    return (
                        <div onClick={() => goChat(item.name)} key={index}>
                            <FriendsItem imgSrc={item.imgSrc} name={item.name}></FriendsItem>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Friends;