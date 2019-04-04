/* eslint-disable */
import { bus } from '../../main'
import util from '../../util'
export default {
  data() {
    return {
      
    };
  },
  beforeRouteEnter (to, from, next) {
    bus.$emit('path', util.trimPath(to['path']));
  },
  methods: {
  }
};