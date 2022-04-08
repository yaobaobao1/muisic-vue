function remSize(){
    // 获取宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth >= 750){
        deviceWidth = 750
    }
    if(deviceWidth <= 320){
        deviceWidth = 320
    }
    // 设置元素大小 1rem 等于100像素
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
    // 设计稿是750px
    // 设置一半的宽度那么就是375px
    // 1rem == 100px 的设计稿宽度
    // 表达一半的宽度就是3.75rem
}


remSize()

window.onresize = function(){
    remSize()
}