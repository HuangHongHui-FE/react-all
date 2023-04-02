import './Footer.less';
import { NavLink } from 'react-router-dom';

function Footer(props) {
    let { tabsArr } = props

    return (
        <footer className='footer'>
            <div className="footer_con">
                {
                    tabsArr.map((item, index) => {
                        return (
                            <NavLink to={item.path} key={index}>
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                            </NavLink>
                        )
                    })
                }
            </div>
        </footer>
    )
}


export default Footer;