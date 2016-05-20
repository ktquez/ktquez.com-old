import Home from './components/Home/index'
import Bio from './components/Pages/Bio'
import Projects from './components/Pages/Projects'
import Lab from './components/Pages/Lab'
import Contact from './components/Pages/Contact'

export const routes = {
  '*': {
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
  }
  /*
    BIO             (SOBRE)
    BLOG            (LISTAGEM DE ARTIGOS = HOME)
    BLOG/:SLUG      (ARTIGO ESPECÍFICO)
    LAB             (POSTERIORMENTE, EXPERIÊNCIAS COM DEMOS = CODROPS/CODEHOUSE E ETC)
    LAB/:PROJECT
    PROJECTS        (GITHUB/PORTIFOLIO)
    PROJECTS/:SLUG
    CONTACT         (FORM DE CONTATO)
   */
}
