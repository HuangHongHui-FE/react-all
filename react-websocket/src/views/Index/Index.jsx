import './Index.less'
import Header from '../../components/Header/Header';

import Home from '../../components/Home/Home'

import Footer from '../../components/Footer/Footer'
function Index() {

    let showHeader = true;

    return (
        <div className='index_con'>
            {
                showHeader ?
                    <header className='header'>
                        <Header title="微信" hidden="true"></Header>
                    </header>
                    : <></>
            }

            <div className='content'>
                <Home></Home>
            </div>


            <footer className='footer'>
                <Footer></Footer>
            </footer>
        </div>
    )
}



export default Index;