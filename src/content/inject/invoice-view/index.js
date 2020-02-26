import { execute, print, executeOnCreate } from '../util'

import automate from './automate'
import optics from './optics'
import surgery from './surgery'

import printCssFile from './print.css'

const Executables = {
  automate,
  optics,
  surgery
}

function init(page, modes) {
  specific()
  print(page, 'page')
  execute(Executables, modes)
}

function specific () {
  const printCss = printCssFile.toString()
  executeOnCreate('.wv-header__actions', createPrintButton, printCss)
}

function quickPrint(selector, css) {
  const section = document
    .querySelector(selector)
    .cloneNode(true)

  const invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > span').innerText
  const idDiv = document.createElement('span')
  idDiv.innerText = invoiceNum
  idDiv.style = 'font-size: 50px; font-weight: 700; position: absolute; top: 30px; left: calc(50%);padding:20px;border:2px solid #ddd;transform:translateX(-50%);'

  const pic = document.querySelector('img')
  pic.src = chrome.runtime.getURL('img/logo.jpg')
  pic.style = 'height:200px;border-radius:10px;'

  const picContainer = document.createElement('div')
  picContainer.appendChild(pic)
  picContainer.style = 'position: absolute;top:20px; left:20px;'

  const body = document.createElement('body')
  const html = document.createElement('html')
  const head = document.createElement('head')
  const style = document.createElement('style')

  style.type = 'text/css'
  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }

  head.appendChild(style)
  html.appendChild(head)
  body.appendChild(section)
  body.appendChild(idDiv)
  body.appendChild(picContainer)
  html.appendChild(body)

  const printWindow = window.open('', '', 'width=900,height=650')
  printWindow.document.write(html.innerHTML)
  printWindow.document.close()
  printWindow.focus()

  printWindow.document.querySelector('img').onload = function() {
    printWindow.print()
    printWindow.close()
  }
}

function createPrintButton (selector, printCss) {
  const printBtn = document.createElement('button')
  printBtn.className = 'wv-button--secondary'
  printBtn.innerText = 'Print Invoice'

  printBtn.addEventListener('click', () => 
    executeOnCreate('.contemporary-template', quickPrint, printCss))

  const headerBtnGroup = document.querySelector(selector)
  headerBtnGroup.appendChild(printBtn)

}

export default {
   init
}