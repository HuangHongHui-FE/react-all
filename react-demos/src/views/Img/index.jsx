import { Component } from 'react';



class Img extends Component {

    lazyload() {
        let viewHeight = document.body.clientHeight; //获取可视区高度
        let imgs = document.querySelectorAll('img[data-src]');
        imgs.forEach((item, index) => {
            if (item.dataset.src === '') return

            // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
            let rect = item.getBoundingClientRect()
            if (rect.bottom >= 0 && rect.top < viewHeight) {
                item.src = item.dataset.src
                item.removeAttribute('data-src')
            }
        })
    }

    // 可以使用节流优化一下
    // window.addEventListener('scroll', lazyload)
    render(){
        return (
            <>

            </>
        )
    }
}


export default Img;