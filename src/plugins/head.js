const opt = {
  title: document.title,
  separator: '|'
}

let diff = []
let diffTitle = {}

const getHead = () => document.getElementsByTagName('head')[0]

const undoTitle = (state) => {
  if (state.before) {
    document.title = state.before
  }
}

const undo = (states) => {
  let head = getHead()
  states.map((state) => {
    if (state.before) {
      head.replaceChild(state.before, state.after)
      return
    }
    head.removeChild(state.after)
  })
}

const headTitle = (val) => {
  if (!val) return
  diffTitle.before = opt.title
  document.title = `${val} ${opt.separator} ${opt.title}`
}

const headMeta = (objMeta) => {
  if (!objMeta) return
  let head = getHead()
  Object.keys(objMeta).map((prop) => {
    let meta = objMeta[prop]
    Object.keys(meta).map((value) => {
      // set state of elements
      let state = {}
      let el = head.querySelector('meta[' + prop + '="' + value + '"]') || document.createElement('meta')
      let clone = el.cloneNode(true)
      // Assign Content
      el.setAttribute('content', meta[value])
      // If exists element
      if (el.getAttribute(prop)) {
        state.before = clone
        state.after = el
        diff.push(state)
        return
      }
      // If not exists element
      el.setAttribute(prop, value)
      head.appendChild(el)
      state.after = el
      diff.push(state)
    })
  })
}

const headLink = (objLink) => {
  if (!objLink) return
  let head = getHead()
  Object.keys(objLink).map((rel) => {
    let state = {}
    let el = head.querySelector('link[rel="' + rel + '"]') || document.createElement('link')
    let props = objLink[rel]
    let clone = el.cloneNode(true)
    // Assign for each the props
    Object.keys(props).map((prop) => {
      el.setAttribute(prop, props[prop])
    })
    // If exists element
    if (el.getAttribute('rel')) {
      state.before = clone
      state.after = el
      diff.push(state)
      return
    }
    // If not exists element
    el.setAttribute('rel', rel)
    head.appendChild(el)
    state.after = el
    diff.push(state)
  })
}

export const head = {
  compiled: function () {
    let head = this.$options.head
    if (!head) return
    if (head.title) {
      let title = (typeof head.title === 'string') ? head.title : head.title.bind(this)()
      headTitle(title)
    }
    if (head.meta) {
      let meta = (typeof head.meta === 'object') ? head.meta : head.meta.bind(this)()
      headMeta(meta)
    }
    if (head.link) {
      let link = (typeof head.link === 'object') ? head.link : head.link.bind(this)()
      headLink(link)
    }
  },
  destroyed () {
    let head = this.$options.head
    let hasUndo = head.undo || true
    if (!hasUndo) return
    undoTitle(diffTitle)
    undo(diff)
    diff = []
  }
}

const plugin = {
  install: function (Vue, options) {
    if (options) { Vue.util.extend(opt, options) }
    Vue.options = Vue.util.mergeOptions(Vue.options, head)
  }
}

export default plugin
