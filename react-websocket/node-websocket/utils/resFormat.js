exports.resFormat = (data, status = 200, msg = 'ok') => {
    let obj = {}
    if(status !== 200){
        obj = {
            msg: 'fail',
            status: status,
            data
        }
        return obj
    }
    obj = {
        data: data,
        status,
        msg
    };
    return obj
}   