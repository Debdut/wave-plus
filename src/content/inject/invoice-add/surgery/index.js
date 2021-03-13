import { executeOnCreate, capitalize, snakeToTitle } from '../../util'
import Doctors from '../../doctors'

function init() {
  executeOnCreate('.invoice-add__body__items', addOptions)
  executeOnCreate('.invoice-metadata .wv-form-field:nth-child(4) > label > div', changePaymentDueTitle)
}

// Change Text
function changePaymentDueTitle (selector) {
  const pdue = document.querySelector(selector)
  pdue.innerText = 'Operation Date'
} 

// Surgery Options
const dataPoints = {}

function register (id) {
  dataPoints[id] = ''
}

function reactChange (data, key) {
  dataPoints[key] = data
  const textArea = document.querySelector('.invoice-memo .wv-textarea')
  if (textArea) {
    textArea.value = objectToString(dataPoints)
  }
}

function objectToString (obj) {
  let str = ''
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key]) {
        str = str + snakeToTitle(key) + ' - ' + obj[key] + '\n'
      }
    }
  }
  return str
}

function addOptions (selector) {
  const referenceNode = document.querySelector(selector)
  
  const optionsNode = document.createElement('div')
  optionsNode.className = '.surgery-options'
  optionsNode.style = 'padding-bottom: 10px;display:grid;grid-template-columns:1fr 1fr;'

  optionsNode.appendChild(options('operative-eye', ['Left', 'Right']))
  optionsNode.appendChild(options('surgeon', Doctors.map(d => d.name)))
  optionsNode.appendChild(input('biometry'))
  optionsNode.appendChild(input('addtional-details'))
  optionsNode.appendChild(input('left-eye-vision'))
  optionsNode.appendChild(input('right-eye-vision'))

  referenceNode.parentNode.insertBefore(optionsNode, referenceNode.nextSibling)
}

function options (id, list) {
  register(id)

  const btnGroup = document.createElement('div')
  btnGroup.id = id

  const title = document.createElement('h4')
  title.innerText = snakeToTitle(id)

  btnGroup.appendChild(title)
  
  list.forEach (op => {
    const btn = document.createElement('button')
    btn.className = 'wv-button--secondary'
    btn.innerText = capitalize(op)

    btnGroup.appendChild(btn)

    btn.addEventListener('click', () => {
      reactChange(op, id)
      const selectedBtn = document.querySelector(`#${id} .wv-button--primary`)
      if (selectedBtn) {
        selectedBtn.className = 'wv-button--secondary'
      }

      btn.className = 'wv-button--primary'
    })
  })
  return btnGroup
}

function input (id) {
  register(id)

  const inputGroup = document.createElement('div')
  inputGroup.id = id

  const title = document.createElement('h4')
  title.innerText = snakeToTitle(id)

  inputGroup.appendChild(title)

  const inp = document.createElement('input')
  inp.className = 'wv-input wv-input'
  inputGroup.appendChild(inp)

  inp.addEventListener('keyup', () => reactChange(inp.value, id))
  return inputGroup
}



export default {
  init
}