//设置cookie
function setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name+'='+value+';iDay'+oDate;
    document.title = name+'='+value+';iDay'+oDate;
    console.log(name+'='+value+';iDay'+oDate)
}
//name=xhdong;
// password=123
//获取cookie
function getCookie(name) {
    // debugger
    //将cookie分割成数组
    var arr = document.cookie.split(';');
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        //如果数组的第一个元素与获取的名称相等表示找到cookie，并将其值返回出去
        if (arr2[0] = name) {
            return arr2[1];
        }
    }
    //如果整个循环都结束了仍没有找到cookie则返回空
    return '';
}

//删除cookie
function removeCookie(name) {
    setCookie(name, 1, -1);
}