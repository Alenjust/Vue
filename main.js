import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$cloud = uniCloud

let BASE_API_URL="http://www.localhost:8989/";//本地接口
//const BASE_API_URL="https://www.zykhome.club/api/"; 线上接口
const app = new Vue({
    ...App
})
app.$mount()
