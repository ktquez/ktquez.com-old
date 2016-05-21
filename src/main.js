import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

router.map(routes)

router.start(App, 'app')
