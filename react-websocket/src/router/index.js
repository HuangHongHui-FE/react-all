import { Routes, Route } from 'react-router-dom';

import Index from '../views/Index/Index';

import Friends from '../views/Friends/Friends';

import My from '../views/My/My';

function BaseRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Index />}></Route>

            <Route path="/friends" element={<Friends />}></Route>

            <Route path="/my" element={<My />}></Route>
        </Routes>
    )
}


export default BaseRouter;