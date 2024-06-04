import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faThumbsUp, faThumbsDown,  faCircleXmark, faPenToSquare, faCircleUp} from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add([faThumbsUp, faThumbsDown, faCircleXmark, faPenToSquare, faCircleUp])



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(createPinia()).use(router).mount('#app')
