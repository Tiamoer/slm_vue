import {createStore} from 'vuex'

export default createStore({
    state: {
        slmToken: '',
        userinfo: JSON.parse(localStorage.getItem("userInfo"))
    },
    mutations: {

        SET_TOKEN: (state, token) => {
            state.slmToken = token;
            localStorage.setItem('slmToken', token);
        },

        SET_USERINFO: (state, userinfo) => {
            state.userinfo = userinfo;
            localStorage.setItem('userInfo', JSON.stringify(userinfo));
        },

        REMOVE_INFO: (state) => {
            localStorage.setItem("slmToken", '');
            localStorage.setItem("userInfo", JSON.stringify(''));
            state.userinfo = {};
        },
    },
    getters: {
        getToken: state => {
            return state.slmToken;
        },
        getUser: state => {
            return state.userinfo;
        }
    },
    actions: {},
    modules: {}
})
