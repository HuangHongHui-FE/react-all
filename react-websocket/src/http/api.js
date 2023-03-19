import request from './request';
import {params} from '../utils/query'
export function getFriends(query) {
    // 参数拼接
    let url = '/friends?'+ params(query);
    return request({
        url: url,
        method: 'GET'
    })
}

export function getWeiXin() {
    return request({
        url: '/weixin',
        method: 'GET'
    })
}



export function getMsg(query){
    let url = "/chatMsg?" + params(query);
    console.log(url);
    return request({
        url: url,
        method: "GET",

    })
}

// export function getSocket(){
//     let url = "/chatMsg?" + params(query);
//     console.log(url);
//     return request({
//         url: url,
//         method: "GET",

//     })
// }