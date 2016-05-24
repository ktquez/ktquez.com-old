import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App'
import { routes } from './routes'

// Set default options in vue Resource
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:8080'

Vue.use(VueRouter)
const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

router.map(routes)
router.start(App, 'app')
