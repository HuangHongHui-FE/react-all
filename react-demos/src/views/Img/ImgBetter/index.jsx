import React, { useState, useRef, useEffect } from 'react';
import {fangdou} from '../../../utils'
import './index.less'


import one from '../../../static/image/Img/01.png'
import two from '../../../static/image/Img/02.png'
import three from '../../../static/image/Img/03.png'
import four from '../../../static/image/Img/04.png'
import five from '../../../static/image/Img/05.png'
import six from '../../../static/image/Img/06.png'
import seven from '../../../static/image/Img/07.png'
import eight from '../../../static/image/Img/08.png'
import nine from '../../../static/image/Img/09.png'
import ten from '../../../static/image/Img/10.png'

// 图片懒加载011
function ImgBetter() {
    const [list, setList] = useState([one, two, three, four, five, six, seven, eight, nine, ten]);
    const ref = useRef(null)

    useEffect(() => {
        const imgs = document.getElementsByTagName('img');
        console.log('current---', ref.current)
        ref.current?.addEventListener('scroll', () => {
            run(imgs)
        })
        run(imgs)
        return () => {
            ref.current?.removeEventListener('scroll', () => {
                console.log('listens end')
            })
        }
    }, [])

    // 图片懒加载
    function scrollViewEvent(images) {
        // 可视化区域高度
        const clientHeight = ref.current?.clientHeight || 0
        // 滚动的距离
        const scrollTop = ref.current?.scrollTop || 0
        // 遍历imgs元素
        for (let image of images) {
            if (!image.dataset.src) continue
            // 判断src是否已经加载
            if (image.src) continue
            //图片距离顶部距离
            let top = image.offsetTop
            // 公式
            if (clientHeight + scrollTop > top) {
                // 设置图片源地址，完成目标图片加载
                image.src = image.dataset.src || ''
                image.removeAttribute('data-src')
            }
        }
    }

    // 截流函数hook
    const run = fangdou(scrollViewEvent, 500);

    return (
        <div className="scroll-view" ref={ref}>
            {list.map((id, index) => {
                return (
                    <div key={index} className="scroll-item">
                        <img
                            style={{ width: '100%', height: '100%' }}
                            // data-src={`../../../static/image/Img/${id}.png`}
                            data-src={id}
                        />
                    </div>
                );
            })}
        </div>
    )
}


export default ImgBetter;