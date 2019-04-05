/* eslint-disable */
import { bus } from '../../main'
import util from '../../util'
export default {
  created () {
    bus.$emit('path', util.trimPath(window.location.href));
  },
}