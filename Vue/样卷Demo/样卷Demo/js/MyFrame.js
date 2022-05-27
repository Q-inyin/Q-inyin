let myData = {
    el:'app',
    data:'111111'
}
// 绑定事件，当页面加载完执行绑定的函数
function init(){
    document.getElementById(myData.el).innerText = myData.data;
}
