function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name]
    }
}
//1.将想要设置的属性值作为参数传递到函数中控制
//2.如果传递进来的属性值是opacity，还能正常运行么？
//2.1针对传递进来的opacity属性单独处理
//2.2计算中存储容量有限，不能真正存储小数，他只能存储小数的一个近似值，所以会有误差需要四舍五入处理(所有计算设备都存在类似问题)
//如：0.07*100==>?


function startMove(obj, attr, iTarget, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var cur = 0;
        if (attr == 'opacity') {
            // cur = parseFloat(getStyle(obj, attr)) * 100;
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fnEnd) fnEnd();
        } else {
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity: '+ (cur + speed) +')';
                obj.style[attr] = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px'
            }
        }
    }, 30)
}