const opt = {
  compl: document.title,
  separator: '|'
}

let diff = []
let diffTitle = {}

const util = {
  getHead () {
    return document.getElementsByTagName('head')[0]
  },
  undoTitle (state) {
    if (!state.before) return
    document.title = state.before
  },
  undo (states) {
    if (!states.length) return
    let head = this.getHead()
    states.map((state) => {
      (state.before) ? head.replaceChild(state.before, state.after) : head.removeChild(state.after)
    })
  },
  title (val) {
    if (!val) return
    diffTitle.before = opt.compl
    document.title = `${val.inner} ${val.separator || opt.separator} ${val.compl || opt.compl}`
  },
  meta (objMeta) {
    if (!objMeta) return
    let head = this.getHead()
    let state = {}
    Object.keys(objMeta).map((prop) => {
      let meta = objMeta[prop]
      Object.keys(meta).map((value) => {
        // set state of elements
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
  },
  link (objLink) {
    if (!objLink) return
    let head = this.getHead()
    let state = {}
    Object.keys(objLink).map((rel) => {
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
}

export const head = {
  ready () {
    let self = this
    let head = this.$options.head
    if (!head) return
    Object.keys(head).map((key) => {
      if (head[key]) {
        let obj = (typeof head[key] === 'object') ? head[key] : head[key].bind(self)()
        util[key](obj)
      }
    })
  },
  destroyed () {
    let head = this.$options.head
    if (head.undo || typeof head.undo === 'undefined') {
      util.undoTitle(diffTitle)
      util.undo(diff)
    }
    diff = []
  }
}

const plugin = {
  install: function (Vue, options) {
    if (options) { Vue.util.extend(opt, options) }
    Vue.options = Vue.util.mergeOptions(Vue.options, head)
  }
}

plugin.version = '0.0.1'

export default plugin
