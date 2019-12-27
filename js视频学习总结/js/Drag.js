//使用面向对象改写拖拽
function Drag(id) {
    this.oDiv = document.getElementById(id);
    this.disX = 0;
    this.disY = 0;
    var _this = this;
    this.oDiv.onmousedown = function (e) {
        _this.fnDown(e);
        return false;
    }
}
Drag.prototype.fnDown = function (e) {
    var e = e || event;
    var _this = this;
    this.disX = e.clientX - this.oDiv.offsetLeft;
    this.disY = e.clientY - this.oDiv.offsetTop;
    document.onmousemove = function (e) {
        _this.fnMove(e);
    };
    document.onmouseup = function () {
        _this.fnUp();
    };
};
Drag.prototype.fnMove = function (e) {
    this.oDiv.style.left = e.clientX - this.disX + 'px';
    this.oDiv.style.top = e.clientY - this.disY + 'px';
};
Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
};