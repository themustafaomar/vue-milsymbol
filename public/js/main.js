import { createApp, h } from 'vue'
import App from './App'
import VMilsymbol from '@'

const app = createApp({
  render: () => h(App)
})

app.use(VMilsymbol)
app.mount('#app')
