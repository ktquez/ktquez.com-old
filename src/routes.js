import Blog from './components/Blog/index'
import Article from './components/Article/index'
import Bio from './components/Pages/Bio'
import Projects from './components/Pages/Projects'
import Lab from './components/Pages/Lab'
import Contact from './components/Pages/Contact'
import Writer from './components/Writer/index'
import NotFound from './components/Pages/NotFound'

export const routes = {
  '/blog': {
    name: 'blog',
    component: Blog
  },
  '/page/:page': {
    name: 'paginate',
    component: Blog
  },
  '/blog/:slug': {
    name: 'article',
    component: Article
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
  '/writer': {
    name: 'writer',
    component: Writer
  },
  '*': {
    name: '404',
    component: NotFound
  }
}
