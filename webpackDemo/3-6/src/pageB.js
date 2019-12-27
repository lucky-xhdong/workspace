import './subPageA'
import './subPageB'
import * as _ from 'lodash'

// require.ensure(['./subPageA', './subPageB'], function () {
//     var subPageA = require('./subPageA');
//     var subPageB = require('./subPageB');
// }, 'subPageA')

import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function () {
    console.log('subPageA')
})
import(/* webpackChunkName: 'subPageB' */'./subPageB').then(function () {
    console.log('subPageB')
})
//
// require.ensure(['./subPageB'], function () {
//     var subPageB = require('./subPageB');
// }, 'subPageB')

//为什么要进行两次require，第一次只是加载但并不会执行
// require.ensure(['lodash'], function () {
//     var _ = require('lodash');//执行
//     _.join(['1', '2'], '3')
// }, 'vendor');
// import * as _ from 'lodash'

export default 'pageB'