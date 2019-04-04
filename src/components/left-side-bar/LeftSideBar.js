/* eslint-disable */
import { bus } from '../../main';
export default {
  data () {
    return {
      path: 'flash sales'
    }
  },
  created () {
    bus.$on('path', (path) => {
      this.path = path
    })
    console.log('last index of / in url is', window.location.href.lastIndexOf('/'));
    var currentUrl = window.location.href;
    currentUrl = currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length);
    this.currentPage = currentUrl.split('-')[0] + ' ' + currentUrl.split('-')[1];
  },
  methods: {
    changeTab: function (tab) {
      document.getElementById('navTabs').classList = 'pos-rel ' + tab;
      document.querySelectorAll('.content-wrap>section')
      .forEach(section => section.className = '');
      document.getElementById(tab).className = 'active';
    },
    newTextArea: function () {
      // if (window.location.href.indexOf('flash-sales') !== -1) {
      //   console.log('this is the flash-sales page');
      // } else if (window.location.href.indexOf('treasure-hunt') !== -1) {
      //   console.log('this is the treasure-hunt page');
      // } else if (window.location.href.indexOf('vouchers') !== -1) {
      //   console.log('this is the vouchers page');
      // } else {
      //   console.log('this is the home page');
      // }
    }
  }
}