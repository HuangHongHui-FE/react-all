import { useEffect } from "react"

// 异步回调的形式
export default function Demo() {
    useEffect(() => {
        getData().then(res => {
            console.log(res)
        })
    }, [])
    return <div>Demo</div>
}

// 下面这样async await的方式会报错
// export default function Demo() {
//     useEffect(async () => {
//         const res = await getData()
//         console.log(res)
//     }, [])
//     return <div>Demo</div>
// }

// 如果需要使用异步函数，则要像下面这样使用IIFE 
// export default function Demo() {
//     useEffect(() => {
//         (async function (){
//             const res = await getData()
//             console.log(res)
//         }())
//     }, [])
//     return <div>Demo</div>
// }

function getData () {
    return new Promise((resolve, reject) => {
        resolve(123)
    })
}