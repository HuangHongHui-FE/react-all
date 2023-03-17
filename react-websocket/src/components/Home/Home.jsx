import './Home.less'

function Home() {
    return (
        <div className='home_con'>
            <div className="home_item">
                <div className='home_item_left'>
                    <img src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" alt="" />
                </div>
                <div className='home_item_middle'>
                    <div className='home_item_middle_top'>订阅号信息</div>
                    <div className='home_item_middle_bottom'>小毛贼：都会变覅好好说的煎熬地方</div>
                </div>
                <div className='home_item_right'>
                    <div className='home_item_right_top'>12:22</div>
                    <div className='home_item_right_bottom'>右</div>
                </div>
            </div>
        </div>
    )
}

export default Home;