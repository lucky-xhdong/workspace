"use strict";

var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag: false,
        delFlag: false,
        curProduct: ''
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            this.cartView();
        });
    },
    //局部过滤器
    filters: {
        formatMoney: function formatMoney(value) {
            "use strict";

            return '￥' + value.toFixed(2); //toFixed有精度缺失（四舍五入），所以价格一般有后台传入
        }
    },
    methods: {
        // 渲染页面
        cartView: function cartView() {
            "use strict";

            var _this2 = this;

            this.$http.get('data/cartData.json').then(function (response) {
                _this2.productList = response.data.result.list;
            }, function (response) {});
        },

        // 通过+、-改变商品数量从而改变总额
        changeMoney: function changeMoney(product, number) {
            "use strict";

            if (number > 0) {
                product.productQuantity++;
            } else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
            this.calcTotalPrice();
        },

        // 计算总金额--如果商品被选中，总金额+=商品价格*商品数量
        calcTotalPrice: function calcTotalPrice() {
            "use strict";

            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    _this.totalMoney += item.productPrice * item.productQuantity;
                }
            });
        },

        // 判断是选中了按钮
        selectedProduct: function selectedProduct(item) {
            "use strict";
            //判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性

            if (typeof item.checked == 'undefined') {
                // Vue.set(item, 'checked', true);//全局注册
                this.$set(item, 'checked', true); //局部注册
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },

        // 全选与取消全选，点击全选时flag为true,取消时为false
        checkAll: function checkAll() {
            "use strict";

            var _this = this;
            this.productList.forEach(function (item, index) {
                if (!_this.checkAllFlag) {
                    _this.$set(item, 'checked', 'true');
                } else {
                    if (typeof item.checked == 'undefined') {
                        _this.$set(item, 'checked', true);
                    } else {
                        item.checked = !item.checked;
                    }
                }
            });
            _this.checkAllFlag = !_this.checkAllFlag;
            this.calcTotalPrice();
        },

        //弹出提示框，提示是否删除商品
        delConfirm: function delConfirm(item) {
            "use strict";

            this.delFlag = true;
            this.curProduct = item;
        },

        //点击确认删除商品
        delProduct: function delProduct() {
            "use strict";

            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    }
});

//# sourceMappingURL=cart-compiled.js.map