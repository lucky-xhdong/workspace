import base from './src/css/base.css'
import common from './src/css/common.css'

var app = document.getElementById('app');
console.log(base)
app.innerHTML = '<div class="' + base.box + '"></div>';
// base.use();
// base.unuse()

// var flag = false;
//
// setInterval(function () {
//     if (flag) {
//         base.unuse();
//     } else {
//         base.use();
//     }
//     flag = !flag;
// }, 500)