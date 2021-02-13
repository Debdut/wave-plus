import { executeOnCreate, removeNode } from './util'

function init () {
  executeOnCreate('.wv-notify--info.row-warning-notif', removeNode)
}

export default {
  init
}