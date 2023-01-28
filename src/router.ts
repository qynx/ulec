import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue'
import Home from './Home.vue'
import TextDiff from './page/TextDiff.vue'
import EncodeToolList from './components/EncodeToolList.vue'
import TimeToolList from './components/TimeToolList.vue';

const empty = {
    template: '<div></div>'
}

export const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
            children: [
                {
                    path: 'text_diff',
                    name: 'text_diff',
                    component: TextDiff,
                },
                {
                    path: 'encode_tool',
                    name: 'encode_tool',
                    component: EncodeToolList,
                },
                {
                    path: 'time_tool',
                    name: 'time_tool',
                    component: TimeToolList,
                },
                {
                    path: '',
                    name: 'empty',
                    component: empty
                }
            ]
        },
    ], // short for `routes: routes`
})