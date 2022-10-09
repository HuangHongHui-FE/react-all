function typeofPro(data) {
    let t = Object.prototype.toString.call(data);
    switch(t){
        case '[object String]':
            return 'String'
        case '[object Object]':
            return 'Object'
        case '[object Number]':
            return 'Number'
        case '[object Null]':
            return 'Null'
        case '[object Undefined]':
            return 'Undefined'
        case '[object Function]':
            return 'Function'
        case '[object Boolean]':
            return 'Boolean'
        case '[object BigInt]':
            return 'BigInt'
        default:
            return '-1'
    }
}


export default typeofPro;