const viewportWidth = 750
const baseSize = 32
// 设置 rem 函数 
function setRem() {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。 
    const scale = document.documentElement.clientWidth / viewportWidth
    // 设置页面根节点字体大小 
    document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
setRem()
window.onresize = function () { setRem() }
