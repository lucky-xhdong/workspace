var fuhao = {}

fuhao.huofang = function () {
    return '馒头';
};

fuhao.chuliliangshi = function () {
    return '面粉';
};

fuhao.mantou = function () {
    this.chuliliangshi();
    this.huofang();
};

fuhao.men = {
    return this.mantou();
}