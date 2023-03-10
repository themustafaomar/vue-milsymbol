import component from './component'
import { defaults } from './defaults'

export default component.install = (Vue, options = {}) => {
  Object.entries(options).forEach(([key, value]) => {
    defaults[key] = value
  })

  Vue.component('v-milsymbol', component)
}
