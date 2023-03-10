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
  mounted() {
    const { sidc, options } = this.$props

    this.milsymbol = new ms.Symbol(sidc, {
      ...defaults,
      ...options
    })

    this.$el.appendChild(this.milsymbol.asCanvas())
  },
  methods: {
    getInstance() {
      return this.milsymbol
    }
  }
}
