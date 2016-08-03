const opt = {
  compl: document.title,
  separator: '|'
}

let diff = []
let diffTitle = {}

const util = {
  getPlace (place) {
    return document.getElementsByTagName(place)[0]
  },
  undoTitle (state) {
    if (!state.before) return
    document.title = state.before
  },
  undo (states) {
    if (!states.length) return
    states.map(state => {
      const place = this.getPlace(state.place || 'head')
      ;(state.before) ? place.replaceChild(state.before, state.after) : place.removeChild(state.after)
    })
  },
  /**
   * Add state before and after of the elements
   */
  setStateElements (clone, el, state) {
    state.before = clone
    state.after = el
    diff.push(state)
    return
  },
  title (val) {
    if (!val) return
    diffTitle.before = opt.compl
    document.title = `${val.inner} ${val.separator || opt.separator} ${val.compl || opt.compl}`
  },
  meta (objMeta) {
    if (!objMeta) return
    const head = this.getPlace('head')
    Object.keys(objMeta).map(prop => {
      const state = {}
      let meta = objMeta[prop]
      Object.keys(meta).map(value => {
        // set state of elements
        let el = head.querySelector('meta[' + prop + '="' + value + '"]') || document.createElement('meta')
        let clone = el.cloneNode(true)
        // Assign Content
        el.setAttribute('content', meta[value])
        // If exists element
        if (el.getAttribute(prop)) {
          this.setStateElements(clone, el, state)
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
    const head = this.getPlace('head')
    Object.keys(objLink).map(rel => {
      const state = {}
      let el = head.querySelector(`link[rel="${rel}"]`) || document.createElement('link')
      let props = objLink[rel]
      let clone = el.cloneNode(true)
      // Assign for each the props
      Object.keys(props).map(prop => {
        el.setAttribute(prop, props[prop])
      })
      // If exists element
      if (el.getAttribute('rel')) {
        this.setStateElements(clone, el, state)
        return
      }
      // If not exists element
      el.setAttribute('rel', rel)
      head.appendChild(el)
      state.after = el
      diff.push(state)
    })
  },
  script (objScript) {
    if (!objScript) return
    console.log(objScript)
    const tag = (objScript.body) ? 'body' : 'head'
    const place = this.getPlace(tag)
    objScript.sources.map(src => {
      const state = {}
      let el = document.getElementById(src.id) || document.createElement('script')
      let clone = el.cloneNode(true)
      // If exists element and not fixed
      if (el.getAttribute('id')) {
        if (objScript.fixed) return
        this.setStateElements(clone, el, state)
        return
      }
      Object.keys(src).map(prop => {
        if (prop === 'async') {
          el.async = src[prop]
          return
        }
        if (prop === 'inner') {
          el.textContent = src[prop]
          return
        }
        el.setAttribute(prop, src[prop])
      })
      // If fixed
      place.appendChild(el)
      if (!objScript.fixed) {
        state.after = el
        state.place = tag
        diff.push(state)
      }
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
