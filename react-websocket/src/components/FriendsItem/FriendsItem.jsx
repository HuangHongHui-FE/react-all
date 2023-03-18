import './FriendsItem.less';

function FriendsItem(props){

    let {imgSrc, name} = props;
    return (
        <div className='friends_item'>
            <div className="friends_item_img">
                <img src={imgSrc} alt="" />
            </div>

            <div className='friends_item_name'>
                {name}
            </div>
        </div>
    )
}


export default FriendsItem;