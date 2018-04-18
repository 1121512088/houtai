let mutations = {
    mutations_login (state,payload) {
        state.token = payload.token 
        state.username = payload.username
    },
    mutations_getItem (state,payload) {
        state.username = payload
    }
}

export default mutations

