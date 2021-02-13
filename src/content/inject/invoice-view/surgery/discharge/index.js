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

function Package (eye = '', bio = '', lv = '', rv = '') {
  let pack = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong')
  if (pack) {
    pack = pack.innerText
  } else {
    pack = ''
  }

  // const KEYWORDS_OT = [
  //   'SICS',
  //   'PHACO',
  //   'DCT',
  //   'VITRECTOMY'
  //   ' OT',
  //   ' O.T'
  // ]

  // const isOT = KEYWORDS_OT
  //   .map((word) => pack.includes(word) || pack.includes(word.toLowerCase()))
  //   .reduce((a, c) => a || c)

  // if (!(isOT)) {
  //   pack = ''
  // }

  let price = document.querySelector('.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:last-child span')
  if (price) {
    price = price.innerText
  }
  if (price) {
    pack = [pack, price].join(' ')
  }

  return `<div class="package">
  <div class="label">Package</div>
  <div class="contemporary-template__metadata__customer--billing">
    <strong class="wv-text--strong">${pack}</strong>
    <div class="desc">${eye} Eye</div>
    ${(bio.length > 0) ? `<div class="desc">Biometry ${bio}</div>`: ''}
    ${(lv.length > 0) ? `<div class="desc">Left Eye Vision ${lv}</div>`: ''}
    ${(rv.length > 0) ? `<div class="desc">Right Eye Vision ${rv}</div>`: ''}
  </div>
</div>`
}

function Doctor (doc = '') {
  return `<div class="doctor">
  <div class="label">Surgeon</div>
  <div class="contemporary-template__metadata__customer--billing">
    <strong class="wv-text--strong">${doc}</strong>
  </div>
</div>`
}

function Notes () {
  const pack = document.querySelector('#Content > div > div.wv-frame__wrapper > div.wv-frame__content > div.wv-frame__content__body > div.wv-frame__content__body__main > div > div > div.invoice-view__body > div.invoice-preview > div.invoice-preview__body > div > div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong')
    .innerText
  let rest = ''
  if (pack.includes('SICS') || pack.includes('Sics')) {
    rest = 'One Month'
  } else if (pack.includes('PHACO') || pack.includes('Phaco')) {
    rest = 'Two Weeks'
  }
  return `<div class="notes">
  <div class="label">Notes</div>
  <div class="desc">I certify that the above mentioned patient has been operated by me under LA.
     I hereby advise the patiemt to go under the above mentioned medication, REST for ${rest} 
     and follow the guidelines attached.</div>
  </div>`
}

function parseData(str) {
  const data = {}
  const lines = str
    .trim()
    .split('\n')
    .filter(l => l.length > 0)
    .map(l => {
      const parts = l.split(' - ')
      const key = parts.shift()
      const result = parts.join(' - ')
      data[key] = result
    })
  return data
}

function template () {
  const extra = document.querySelector('.contemporary-template__memo > span:nth-child(2)')
  let data
  if (extra) {
    try {
      data = parseData(extra.innerText)
    } catch (error) {
      data = {}
    }
  }

  if (!data) {
    data = {}
  }

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
      ${Header('Discharge')}

      <div class="block grid">
        ${Customer()}
        ${Package(data['Operative Eye'], data['Biometry'], data['Left Eye Vision'], data['Right Eye Vision'])}
      </div>
      ${MedTable()}

      <div class="block grid">
        ${Notes()}
        ${Doctor(data['Surgeon'])}
      </div>

      ${InfoTable()}
    </div>
    ${getHTML(idDiv)}
    ${getHTML(picContainer)}
  </div>`
}

function Discharge () {
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

export default Discharge

const schedule = [
  {
    medicine: 'Abdrops PD / Gate PD',
    times: 6,
    days: 40
  }, {
    medicine: 'Tropicacyl Plus / TM Plus',
    times: 2,
    days: 10,
    timing: '8AM 8PM'
  }, {
    medicine: 'Prednisolone 10 mg Tablet / Cefadrox 500 mg Tablet',
    times: 2,
    days: 5
  }, {
    medicine: 'Rantac Tablet 150mg Tablet',
    times: 1,
    days: 5
  }, {
    medicine: 'Becozyme C Forte Tablet',
    times: 1,
    days: 15,
    timing: 'Bedtime'
  }, {
    medicine: 'Combiflam Tablet',
    timing: 'SOS'
  }, {
    medicine: 'Carboxymethyl Cellulose Eye Drop',
    times: 3
  }, {
    medicine: 'Nepafenac Eye Drop',
    times: 3
  }, 
]

const schedule_headers = ['Medicine', 'Times', 'Days', 'Timing']

function MedTable () {
  return `<div class="table-container block">
  <div class="label">Medicine Schedule</div>
  <table class="wv-table">
      <thead>
        <tr>
          ${schedule_headers.map(h => `<th>${h}</th>`).join('\n')}
        </tr>
      </thead>
      
      <tbody>
        ${schedule.map(m => 
        `<tr>
          <td class="left-align bold">${m.medicine}</td>
          <td class="middle-align">${m.times}</td>
          <td>${m.days}</td>
          <td>${m.timing}</td>
        </tr>`).join('\n')}
      </tbody>
  </table>
</div>`
}

const fields = ['RDSPH', 'DCYL ', 'AXIS ', ' VA ', 'LDSPH', 'DCYL ', 'AXIS ', ' VA ']

function InfoTable () {
  return `<table class="other-table">
  <thead>
    <tr>
      ${fields.map(f => 
      `<th>${f}</th>`)
      .join('\n')}
    </tr>
  </thead>
  <tbody>
  ${[1,2].map(i => 
    `<tr>
      ${fields.map(f => 
      `<td>&nbsp;</td>`)
      .join('\n')}
    </tr>`).join('\n')}
  </tbody>
</table>`
}