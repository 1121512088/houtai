import { login } from '@/utils/request.js'

let actions = {
    actions_login({ commit }, payload) {
        
        login({
            username:payload.username,
            password:payload.password
        })
        .then((res) => {
            
            if(res.status == 1) {   //返回验证正确 
                //notify  那边传过来的 组件弹框     element-ui的弹框
                payload.notify({
                    title: '登录成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
                //保存本地
                localStorage.setItem('token',res.token)
                localStorage.setItem('username',res.username)
                //登录成功 跳转路由
                payload.router.push('/home')
                
                commit('mutations_login',{token:res.token,username:res.username})

            } else {
                payload.notify.error({
                    title: '登录失败',
                    message: '请重新输入账号密码'
                });
            }

        })

    }
}

export default actions
