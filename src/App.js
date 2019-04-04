/* eslint-disable */
import Navigation from './components/navigation/Navigation.vue'
import LeftSideBar from './components/left-side-bar/LeftSideBar.vue'
import RightSideBar from './components/right-side-bar/RightSideBar.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-navigation': Navigation,
    'left-side-bar': LeftSideBar,
    'right-side-bar': RightSideBar,
    'app-footer': Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter called in vouchers')
  },
}