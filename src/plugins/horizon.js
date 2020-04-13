import Vue from 'vue'
import VueJsonPretty from 'vue-json-pretty'
import Base from './base-mixins'

window.$ = require('jquery')
window.JQuery = require('jquery')
window._ = require('lodash')

window.Horizon = localStorage.getItem('horizon_app') ? JSON.parse(localStorage.getItem('horizon_app')) : {}

Vue.component('vue-json-pretty', VueJsonPretty)
Vue.component('alert', import('@/components/Alert.vue'))
Vue.mixin(Base)

Vue.directive('tooltip', function (el, binding) {
    window.$(el).tooltip({
        title: binding.value,
        placement: binding.arg,
        trigger: 'hover',
    });
});