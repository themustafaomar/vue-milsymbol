import ms from 'milsymbol'
import { defaults } from './defaults'

export default {
  render(h) {
    return h('div', {
      staticClass: 'vue--milsymbol',
      attrs: { id: `vue--milsymbol${this._uid}` }
    })
  },
  props: {
    sidc: String,
    options: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    milsymbol: null
  }),
  watch: {
    sidc(sidc) {
      this.milsymbol.setOptions({ sidc })
      this._reRender()
    }
  },
  mounted() {
    const { sidc, options } = this.$props

    this.milsymbol = new ms.Symbol(sidc, {
      ...defaults,
      ...options
    })

    this._addToDom()
  },
  methods: {
    getInstance() {
      return this.milsymbol
    },
    _reRender() {
      this.$el.innerHTML = ''
      this._addToDom()
    },
    _addToDom() {
      this.$el.appendChild(this.milsymbol.asCanvas())
    }
  }
}
