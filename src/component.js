import ms from 'milsymbol'
import { defineComponent, h, getCurrentInstance, onMounted } from 'vue'
import { defaults } from './defaults'

export default defineComponent({
  name: 'v-milsymbol',
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
      this._setOptions({ sidc })
      this._reRender()
    },
    options: {
      deep: true,
      handler(options) {
        this._setOptions(options)
        this._reRender()
      }
    }
  },
  setup(props) {
    const instance = getCurrentInstance()

    onMounted(() => {
      const { sidc, options } = props

      instance.data.milsymbol = new ms.Symbol(sidc, {
        ...defaults,
        ...options
      })

      instance.ctx._addToDom()
    })

    return () => h('div', {
      id: `vue--milsymbol${instance.uid}`,
      class: 'vue--milsymbol'
    })
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
    },
    _setOptions(options) {
      this.milsymbol.setOptions(options)
    },
  },
})
