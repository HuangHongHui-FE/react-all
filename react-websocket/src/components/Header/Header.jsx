import React from "react";
import "./Header.less"
function Header(props) {
    let { title } = props;
    return (
        <header className='header'>
            <div className="header_con">
                <div className="header_title">{title}</div>
                <div className="header_icon">
                    +
                </div>
            </div>
        </header>
    )
}


export default Header;