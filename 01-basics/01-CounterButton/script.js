import Vue from './vue.esm.browser.js';
const app = new Vue({
    el: '#app',
    data: {
        counter: 0
    },

    methods: {
        count() { 
          this.counter += 1
        }
      }
});

