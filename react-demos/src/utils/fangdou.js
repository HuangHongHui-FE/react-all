function fd(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            console.log(this)  // button
            // console.log(arguments)
            fn.apply(this, arguments)  // 这里不传arguments， clickHandle里面的e是undefined
        }, delay || 500)
    }
}


export default fd;

