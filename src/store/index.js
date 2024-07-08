/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import { createStore } from 'vuex';
import {AppOfEthers} from "@/assets/js/ofetherjs";
import {AppOfWeb3} from "@/assets/js/ofweb3";

const store = createStore({
    state: {
        web3App: null,
        ethersApp: null
    },
    mutations: {
        setWeb3App(state, web3App) {
            state.web3App = web3App;
        },
        setEthersApp(state, ethersApp) {
            state.ethersApp = ethersApp;
        }
    },
    actions: {
        initializeWeb3App({ commit }, web3App) {
            commit('setWeb3App', web3App);
        },
        initializeEthersApp({ commit }, ethersApp) {
            commit('setEthersApp', ethersApp);
        }
    },
    getters: {
        web3App: state => state.web3App,
        ethersApp: state => state.ethersApp
    }
});

export default store;