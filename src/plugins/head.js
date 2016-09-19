
const opt = {
  compl: document.title,
  separator: '|'
}
const diffTitle = {}
let els = []

const util = {
  // sh = shorthand
  shorthand: {
    ch: 'charset',
    tg: 'target',
    n: 'name',
    he: 'http-equiv',
    ip: 'itemprop',
    c: 'content',
    p: 'property',
    sc: 'scheme',
    r: 'rel',
    h: 'href',
    sz: 'sizes',
    t: 'type',
    s: 'src',
    a: 'async',
    d: 'defer',
    i: 'inner'
  },
  getPlace (place) {
    return document.getElementsByTagName(place)[0]
  },
  undoTitle (state) {
    if (!state.before) return
    document.title = state.before
  },
  undo () {
    if (!els.length) return
    els.map(el => {
      el.parentElement.removeChild(el)
    })
    els = []
  },
  title (val) {
    if (!val) return
    diffTitle.before = opt.compl
    document.title = `${val.inner} ${val.separator || opt.separator} ${val.compl || opt.compl}`
  },
  common (arr, tag, place) {
    if (!arr) return
    arr.map(obj => {
      let parent = this.getPlace(place)
      let el = document.getElementById(obj.id) || document.createElement(tag)
      Object.keys(obj).map(prop => {
        let sh = (this.shorthand[prop] || prop)
        if (sh.match(/(body|undo)/g)) return
        if (sh === 'inner') {
          el.textContent = obj[prop]
          return
        }
        el.setAttribute(sh, obj[prop])
      })
      if (obj.body) parent = this.getPlace('body')
      parent.appendChild(el)
      if (obj.undo !== undefined && !obj.undo) return
      els.push(el)
    })
  }
}

export const VueHead = {
  ready () {
    let head = this.$options.head
    if (!head) return
    Object.keys(head).map(key => {
      let prop = head[key]
      if (!prop) return
      let obj = (typeof prop === 'function') ? head[key].bind(this)() : head[key]
      if (key === 'title') {
        util[key](obj)
        return
      }
      util.common(obj, key, 'head')
    })
  },
  destroyed () {
    let head = this.$options.head
    if (head.title.undo) {
      util.undoTitle(diffTitle)
    }
    util.undo()
  }
}
