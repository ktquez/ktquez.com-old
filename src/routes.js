import Home from './components/Home/index'
import Bio from './components/Pages/Bio'
import Projects from './components/Pages/Projects'
import Lab from './components/Pages/Lab'
import Contact from './components/Pages/Contact'

export const routes = {
  '*': {
    component: Home
  },
  '/about': {
    component: Bio
  },
  '/projects': {
    component: Projects
  },
  '/lab': {
    component: Lab
  },
  '/contact': {
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
