import Home from './components/Home/index'
import Bio from './components/Pages/Bio'
import Projects from './components/Pages/Projects'
import Lab from './components/Pages/Lab'
import Contact from './components/Pages/Contact'
import Article from './components/Article/index'

export const routes = {
  '/': {
    name: 'home',
    component: Home
  },
  '/about': {
    name: 'bio',
    component: Bio
  },
  '/projects': {
    name: 'projects',
    component: Projects
  },
  '/lab': {
    name: 'lab',
    component: Lab
  },
  '/contact': {
    name: 'contact',
    component: Contact
  },
  '/blog/:slug': {
    name: 'article',
    component: Article
  }
}
