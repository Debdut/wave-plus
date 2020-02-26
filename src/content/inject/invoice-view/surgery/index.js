import Discharge from './discharge/index.js'
import Consent from './consent/index.js'
import { executeOnCreate } from '../../util'

function printSurgeryDocs(selector, css) {
  const printWindow = window.open('', '', 'width=900,height=650')
  printWindow.document.write(Discharge())
  printWindow.document.close()
  printWindow.focus()

  printWindow.document.querySelector('img').onload = function() {
    printWindow.print()
    printWindow.close()
  }

  const printWindow2 = window.open('', '', 'width=900,height=650')
  printWindow2.document.write(Consent())
  printWindow2.document.close()
  printWindow2.focus()

  printWindow2.document.querySelector('img').onload = function() {
    printWindow2.print()
    printWindow2.close()
  }
}

// Print Surgery Docs Button

function createPrintButton (selector, printCss) {
  const printBtn = document.createElement('button')
  printBtn.className = 'wv-button--secondary'
  printBtn.innerText = 'Print Surgery Docs'

  printBtn.addEventListener('click', () => 
    executeOnCreate('.contemporary-template', printSurgeryDocs))

  const headerBtnGroup = document.querySelector(selector)
  headerBtnGroup.appendChild(printBtn)
}

function specific () {
  executeOnCreate('.wv-header__actions', createPrintButton,)
}

function init () {
  specific()
}

export default {
  init
}