/* eslint-disable */
import { bus } from '../../main'
import util from '../../util'
export default {
  data() {
    return {
      
    };
  },
  created () {
    bus.$emit('path', util.trimPath(window.location.href));
  },
  methods: {
  }
};