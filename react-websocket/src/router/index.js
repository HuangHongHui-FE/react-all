import { Routes, Route, Navigate } from 'react-router-dom';

import Index from '../views/Index/Index';

import Friends from '../views/Friends/Friends';

import My from '../views/My/My';
import Chat from '../views/Chat/Chat';

function BaseRouter() {
    return (
        <Routes>
            {/* 注意这里嵌套路由的配置 */}
            <Route path="/" element={<Index />}>
                <Route path="/friends" element={<Friends />}></Route>
                <Route path="/my" element={<My />}></Route>
            </Route>

            <Route path="/chat" element={<Chat />}></Route>
        </Routes>
    )
}


export default BaseRouter;