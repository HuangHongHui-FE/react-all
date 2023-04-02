import './Index.less';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home'
import Friends from '../Friends/Friends';
import My from '../My/My';
import { useState, useEffect } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';


function Index(props) {
    let routes = useLocation();
    let pathname = routes.pathname;

    let [showHeader, setShowHeader] = useState(true);
    let [title, setTitle] = useState('微信');

    let tabsArr = [
        {
            id: 0,
            name: '微信',
            icon: '--',
            path: '/',
            showHeader: true
        },
        {
            id: 1,
            name: '通讯录',
            icon: '+++',
            path: '/friends',
            showHeader: true
        },
        {
            id: 2,
            name: '我',
            icon: '=',
            path: '/my',
            showHeader: false
        }
    ]


    // 设置header文字
    useEffect(() => {
        tabsArr.map((item, index) => {
            if (item.path === pathname) {
                setShowHeader(item.showHeader);
                setTitle(item.name)
            }
        })

    }, [pathname])

    return (
        <div className="index">
            {
                showHeader ?
                    <Header title={title}></Header>
                    : <></>
            }

            <div className='content'>
                {/* 嵌套路由 */}
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/friends" element={<Friends />}></Route>
                    <Route path="/my" element={<My />}></Route>
                </Routes>
            </div>

            <Footer tabsArr={tabsArr}></Footer>
        </div>
    );
}




export default Index;
