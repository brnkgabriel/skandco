export default {
  methods: {
    changeTab: function (tab) {
      document.getElementById('navTabs').classList = 'pos-rel ' + tab;
      document.querySelectorAll('.content-wrap>section')
      .forEach(section => section.className = '');
      document.getElementById(tab).className = 'active';
    },
    newTextArea: function () {
      if (window.location.href.indexOf('flash-sales') !== -1) {
        console.log('this is the flash-sales page');
      } else if (window.location.href.indexOf('treasure-hunt') !== -1) {
        console.log('this is the treasure-hunt page');
      } else if (window.location.href.indexOf('vouchers') !== -1) {
        console.log('this is the vouchers page');
      } else {
        console.log('this is the home page');
      }
    }
  }
}