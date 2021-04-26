import Vue from 'vue'

Vue.config.productionTip = false

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys.forEach(textsContext)

//require all src files except main.js or router/*.js for coverage.

const srcContext = require.context('../../src', true, /^\.\/(?!.*(?:main|router)).*(\.js)?$/)
srcContext.keys().forEach(srcContext)