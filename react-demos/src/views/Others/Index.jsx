// import {Switch, Route, Redirect} from 'react-router-dom';
import {EffectToLifeCycle} from '../../components/otherCom/EffectToLifeCycle'

const OtherIndex = () => {
    // const titleList = []
    return (
        <>
        <h1>平常学习练手感</h1>
        <h3>useEffect实现生命周期</h3>
        <EffectToLifeCycle></EffectToLifeCycle>
        {/* <Switch>
            <Route path='/otherStu/'></Route>
            <Redirect from='/otherStu' to='otherStu/index'></Redirect>
        </Switch> */}
        
        </>
    )
}


export default OtherIndex;