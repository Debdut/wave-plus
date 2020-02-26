import { execute, print } from '../util'

import automate from './automate'
import optics from './optics'
import surgery from './surgery'

const Executables = {
  automate,
  optics,
  surgery
}

function init(page, modes) {
  print(page, 'page')
  execute(Executables, modes)
}

export default {
  init
}