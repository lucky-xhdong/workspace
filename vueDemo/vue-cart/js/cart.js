var vm = new Vue({
    el: "#app",
    data: {
        totalMoney: 0,
        productList: [],
        checkAllFlag:false,
        delFlag: false,
        curProduct:''
    },
    mounted: function () {
        this.$nextTick(function () {
            this.cartView();
        })
    },
    //局部过滤器
    filters: {
        formatMoney (value) {
            "use strict";
            return '￥' + value.toFixed(2);//toFixed有精度缺失（四舍五入），所以价格一般有后台传入
        }
    },
    methods: {
        // 渲染页面
        cartView () {
            "use strict";
            this.$http.get('data/cartData.json').then(response => {
                this.productList = response.data.result.list;
            }, response => {

            })
        },
        // 通过+、-改变商品数量从而改变总额
        changeMoney (product, number) {
            "use strict";
            if (number > 0) {
                product.productQuantity++;
            }else {
                product.productQuantity--;
                if (product.productQuantity < 1) {
                    product.productQuantity = 1;
                }
            }
            this.calcTotalPrice();
        },
        // 计算总金额--如果商品被选中，总金额+=商品价格*商品数量
        calcTotalPrice () {
            "use strict";
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function (item, index) {
                if (item.checked) {
                    console.log(item.checked);
                    _this.totalMoney += item.productPrice * item.productQuantity;
                }
            })
        },
        // 判断是选中了按钮
        selectedProduct (item) {
            "use strict";
            console.log(item);
            //判断是否未定义，如果没点击过按钮是没有注册的，则需要先注册checked属性
            if ( typeof item.checked == 'undefined') {
                // Vue.set(item, 'checked', true);//全局注册
                this.$set(item, 'checked', true);//局部注册
            } else {
                item.checked = !item.checked;
            }
            this.calcTotalPrice();
        },
        // 全选与取消全选，点击全选时flag为true,取消时为false
        checkAll () {
            "use strict";
            var _this = this;
            this.productList.forEach(function (item, index) {
                if (!_this.checkAllFlag) {
                    _this.$set(item, 'checked', 'true')
                } else {
                    if (typeof item.checked == 'undefined') {
                        _this.$set(item, 'checked', true);
                    } else {
                        item.checked = !item.checked
                    }
                }
            });
            _this.checkAllFlag = !_this.checkAllFlag;
            this.calcTotalPrice();
        },
        //弹出提示框，提示是否删除商品
        delConfirm (item) {
            "use strict";
            this.delFlag = true;
            this.curProduct = item;
        },
        //点击确认删除商品
        delProduct () {
            "use strict";
            var index = this.productList.indexOf(this.curProduct);
            this.productList.splice(index, 1);
            this.delFlag = false;
        }
    }
});