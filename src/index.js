import component from './component'
import { defaults } from './defaults'

export default {
  install(app, options = {}) {
    Object.entries(options).forEach(([key, value]) => {
      defaults[key] = value
    })

    app.component('v-milsymbol', component)
  }
}
