function typeofPro(data) {
    let t = Object.prototype.toString.call(data);
    return t.split(' ')[1].slice(0, -1)
}


export default typeofPro;