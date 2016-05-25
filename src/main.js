import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './components/App'
import { routes } from './routes'
import config from '../config/index'

// Set default options in vue Resource
Vue.use(VueResource)
Vue.http.options.root = process.env.NODE_ENV === 'development'
  ? config.dev.url + ':' + config.dev.port
  : config.build.url

Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

// Sync Vue-router with Store Vuex
sync(store, router)

router.map(routes)
router.start(App, 'app')
