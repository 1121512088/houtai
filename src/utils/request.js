import Vue from 'vue'
import axios from 'axios'
//创建一个新的实例
let instance = axios.create({
    headers: {
        "plantform":"PC",
        "browser":"google"
    },
    baseURL:'http://localhost:9000'
})
//请求拦截
instance.interceptors.request.use((config) => {
    return config
},(err) => {
    return Promise.reject(err)
})

//响应拦截
instance.interceptors.response.use((response) => {
    if(response.status == 200) {
        return response.data
    } else {
        return Promise.reject({
            status: response.data
        })
    }
},(err) => {
    return Promise.reject(err)
})

//  大概的挂载以下 并没有挂载彻底
// Vue.prototype.$http = instance

//这种方法挂载的更彻底    这方法就是Vue底层原理 实现双向绑定
Object.defineProperty(Vue.prototype,'$http',{
    value:instance
    // enumerble:true // 属性让虚拟挂载的$http变为真实的  可选
    
})
export default instance

const login = function (data) {
    return new Promise((resolve,reject) => {
        instance.post('/user/login',{
            username:data.username,
            password:data.password
        }).then((res) => {
             resolve(res)
        }).catch( (err) => {
            reject(err)
        })
    })

}
export {
    login
}




