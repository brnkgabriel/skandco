/* eslint-disable */
import { bus } from '../../main'
import data from '../../data'
export default {
  data () {
    return {
      path: '',
      inputFields: []
    }
  },
  created () {
    bus.$on('path', path => {
      this.path = path;
      this.inputFields = data[path].map(field => {
        return { name: field, list: [] }
      })
      console.log('this.inputFields', this.inputFields)
    })
  },
  methods: {
    changeTab: function (tab) {
      document.getElementById('navTabs').classList = 'pos-rel ' + tab;
      document.querySelectorAll('.content-wrap>section')
      .forEach(section => section.className = '');
      document.getElementById(tab).className = 'active';
    },
    newTextArea: function () {
      
    }
  }
}