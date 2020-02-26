import cssFile from './index.css'
import { getHTML } from '../../../util'

function Header (title) {
  const header = document.querySelector('.contemporary-template__header__info').cloneNode(true)
  header.childNodes[0].innerText = title

  const dateSelect = document.querySelector('.invoice-preview__body > div > section.contemporary-template__metadata > div.invoice-template-details > table > tbody > tr:nth-child(3) > td:nth-child(2) > span')
    .innerText
  const date = document.createElement('div')
  date.innerText = 'Operation Date' + ' ' + dateSelect

  header.appendChild(date)
  
  return getHTML(header)
}

function Customer () {
  const cust = document.querySelector('.contemporary-template__metadata__customer--billing').cloneNode(true)
  const unwantedChild = cust.childNodes[0]
  cust.removeChild(unwantedChild)
  const label = document.createElement('div')
  label.className = 'label'
  label.innerText = 'Patient'
  const custCont = document.createElement('div')
  custCont.className = 'customer'
  custCont.appendChild(label)
  custCont.appendChild(cust)
  return getHTML(custCont)
}


function template () {
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

  return `<div>
    <div class="contemporary-template">
      ${Header('Consent')}

      <div class="block grid">
        ${Customer()}
      </div>
    </div>
    ${getHTML(idDiv)}
    ${getHTML(picContainer)}
  </div>`
}

function Consent () {
  const css = cssFile.toString()
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

  
  body.innerHTML = template()

  head.appendChild(style)
  html.appendChild(head)
  html.appendChild(body)

  return getHTML(html)
}

export default Consent