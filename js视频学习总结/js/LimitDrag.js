//使用面向对象改写拖拽
function LimitDrag(id) {
    //继承父类的属性
    Drag.call(this, id);
}
for (var i in Drag.prototype) {
    //继承父类的方法
    LimitDrag.prototype[i] = Drag.prototype[i];
}
//重写父函数的移动方法
LimitDrag.prototype.fnMove = function (e) {
    var l = e.clientX - this.disX;
    var t = e.clientY - this.disY;
    // debugger
    //边缘位置处理
    if (l < 0) {
        l = 0;
    } else if (l > document.documentElement.clientWidth - this.oDiv.offsetWidth) {
        l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }
    if (t < 0) {
        t = 0;
    } else if (t > document.documentElement.clientHeight - this.oDiv.offsetHeight) {
        t = document.documentElement.clientHeight - this.oDiv.offsetHeight
    }
    this.oDiv.style.left = l + 'px';
    this.oDiv.style.top = t + 'px';
};