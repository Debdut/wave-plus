class AutomateView {
  static init() {
    executeOnCreate('.invoice-view-payment-section__content button', AutomateView.autoPay)
  }

  static autoPay (selector) {
    const btn = document.querySelector(selector)
    btn.click()
    executeOnCreate ('.wv-form--horizontal .wv-select__input', 
    function (s1) {
      const btn2 = document.querySelector(s1)
      btn2.click()
      executeOnCreate('.wv-select__menu > ul > div:nth-child(2)', function(s2) {
        const btn3 = document.querySelector(s2)
        btn3.click()
        executeOnCreate ('.wv-form--horizontal .wv-select__input',
        function(s3) {
          const btn4 = document.querySelectorAll(s3)[1]
          btn4.click()
          executeOnCreate ('.wv-select__menu > ul > div:nth-child(1)',
          function(s4) {
            const btn5 = document.querySelector(s4)
            btn5.click()
          })
        })
      })
    })
  }
}

class Discharge {
  static Header (title) {
    const header = document.querySelector('.contemporary-template__header__info').cloneNode(true)
    header.childNodes[0].innerText = title

    const dateSelect = document.querySelector('.invoice-preview__body section.contemporary-template__metadata > div.invoice-template-details > table > tbody > tr:nth-child(3) > td:nth-child(2) > p')
      .innerText
    const date = document.createElement('div')
    date.innerText = 'Operation Date' + ' ' + dateSelect

    header.appendChild(date)

    return getHTML(header)
  }

  static Customer () {
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

  static Package (eye = '', bio = '', lv = '', rv = '') {
    let pack = document.querySelector('.invoice-preview__body div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong')
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

    let price = document.querySelector('.invoice-preview__body div.contemporary-template__items > table > tbody > tr > td:last-child span')
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

  static Doctor (docName) {
    if (!docName) {
      return `<div class="doctor">
        <div class="label">Surgeon</div>
      </div>`
    }

    const doctor = Doctors
      .filter(d => d.name === docName)[0]
    
    return `<div class="doctor">
      <div class="label">Surgeon</div>
      ${doctor.signature}
      <div class="contemporary-template__metadata__customer--billing">
        <strong class="wv-text--strong">${doctor.name}</strong>
      </div>
    </div>`
  }

  static Notes () {
    const pack = document.querySelector('#Content > div > div.wv-frame__wrapper > div.wv-frame__content > div.wv-frame__content__body > div.wv-frame__content__body__main > div > div > div.invoice-view__body > div.invoice-preview > div.invoice-preview__body div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong')
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

  static template () {
    const extra = document.querySelector('.contemporary-template__memo > p:nth-child(2)')
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

    const invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > p').innerText
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
        ${Discharge.Header('Discharge')}

        <div class="block grid">
          ${Discharge.Customer()}
          ${Discharge.Package(data['Operative Eye'], data['Biometry'], data['Left Eye Vision'], data['Right Eye Vision'])}
        </div>
        ${Discharge.MedTable()}

        <div class="block grid">
          ${Discharge.Notes()}
          ${Discharge.Doctor(data['Surgeon'])}
        </div>

        ${Discharge.InfoTable()}
      </div>
      ${getHTML(idDiv)}
      ${getHTML(picContainer)}
    </div>`
  }

  static CSS = `
  * {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
  }

  .contemporary-template {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    position: relative;
    padding: 10px;
    min-height: 1024px;
    box-sizing: border-box;
    background: #fff;
  }

  .contemporary-template__header__info {
    text-align: right;
    padding-bottom: 10px;
  }

  .contemporary-template .wv-heading--title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 26px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .contemporary-template .wv-heading--subtitle {
    word-wrap: break-word;
    font-size: 18px;
    margin-top: 0;
    line-height: 22px;
  }
  .contemporary-template .address {
    margin-top: 10px;
  }
  .contemporary-template .address__field .wv-text {
    line-height: 22px;
  }

  .block {
    border: 1px solid #000 ;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .doctor {
    padding-right: 30px;
    text-align: right;
    vertical-align: bottom;
  }

  .doctor 

  .package {
    text-align: right;
  }

  .notes .desc {
    font-size: 14px;
    font-weight: 600;
  }

  .package .desc {
    margin-top: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  .label {
    font-size: 14px;
    padding-bottom: 10px;
  }

  .contemporary-template__metadata__customer--billing .wv-text--strong {
    font-size: 22px;
  }

  .package .wv-heading--title {
    font-size:16px;
  }

  .table-container div {
    padding: 5px;
  }

  .wv-table {
    width: 100%;
    font-size: 14px;
  }

  .wv-table tr th {
    text-align: right;
    padding: 0 5px;
    font-size: 16px;
  }

  .wv-table tr td {
    text-align: right;
    padding: 0 5px;
    font-size: 14px;

  }

  .bold {
    font-weight: 600;
  }

  .wv-table .left-align {
    text-align: left;
  }

  .wv-table .middle-align {
    text-align: center;
  }

  .other-table {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;
    border: 1px solid #dee1e2;
    border-radius: 10px;
    border-collapse: collapse;
  }

  .other-table tr th {
    text-align: center;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #dee1e2;
    font-weight: 300;
  }

  .other-table tr td {
    text-align: center;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #dee1e2;
    font-weight: 300;
  }

  svg.signature {
    width: 35px;
    height: 35px;
    padding-right: 20px;
  }
  p {
    margin: 2px;
  }
  `

  static generate () {
    const css = Discharge.CSS
    const body = document.createElement('body')
    const html = document.createElement('html')
    const head = document.createElement('head')
    const style = document.createElement('style')

    
    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }

    
    body.innerHTML = Discharge.template()

    head.appendChild(style)
    html.appendChild(head)
    html.appendChild(body)

    return getHTML(html)
  }

  static MedTable () {
    const headers = Object.keys(Schedule[0])

    return `<div class="table-container block">
    <div class="label">Medicine Schedule</div>
    <table class="wv-table">
        <thead>
          <tr>
            ${headers.map(h => `<th>${h}</th>`).join('\n')}
          </tr>
        </thead>
        
        <tbody>
          ${Schedule.map(m => 
          `<tr>
            <td class="left-align bold">${m[headers[0]]}</td>
            <td class="middle-align">${m[headers[1]]}</td>
            <td>${m[headers[2]]}</td>
            <td>${m[headers[3]]}</td>
          </tr>`).join('\n')}
        </tbody>
    </table>
  </div>`
  }

  static fields = ['RDSPH', 'DCYL ', 'AXIS ', ' VA ', 'LDSPH', 'DCYL ', 'AXIS ', ' VA ']

  static InfoTable () {
    return `<table class="other-table">
    <thead>
      <tr>
        ${Discharge.fields.map(f => 
        `<th>${f}</th>`)
        .join('\n')}
      </tr>
    </thead>
    <tbody>
    ${[1,2].map(i => 
      `<tr>
        ${Discharge.fields.map(f => 
        `<td>&nbsp;</td>`)
        .join('\n')}
      </tr>`).join('\n')}
    </tbody>
  </table>`
  }
}

class Consent {
  static Header (title) {
    const header = document.querySelector('.contemporary-template__header__info').cloneNode(true)
    header.childNodes[0].innerText = title

    const dateSelect = document.querySelector('.invoice-preview__body section.contemporary-template__metadata > div.invoice-template-details > table > tbody > tr:nth-child(3) > td:nth-child(2) > p')
      .innerText
    const date = document.createElement('div')
    date.innerText = 'Operation Date' + ' ' + dateSelect

    header.appendChild(date)
    
    return getHTML(header)
  }

  static Customer () {
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

  static Package (eye = '', bio = '', lv = '', rv = '') {
    let pack = document.querySelector('.invoice-preview__body div.contemporary-template__items > table > tbody > tr > td:nth-child(1) > strong')
    if (pack) {
      pack = pack.innerText
    } else {
      pack = ''
    }

    let price = document.querySelector('.invoice-preview__body div.contemporary-template__items > table > tbody > tr > td:last-child span')
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

  static template () {
    const extra = document.querySelector('.contemporary-template__memo > p:nth-child(2)')
    let data
    if (extra) {
      try {
        data = parseData(extra.innerText)
      } catch (error) {
        data = {}
      }
    }

    const invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > p').innerText
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
        ${Consent.Header('Consent')}

        <div class="block grid">
          ${Consent.Customer()}
          ${Consent.Package(data['Operative Eye'], data['Biometry'], data['Left Eye Vision'], data['Right Eye Vision'])}
        </div>
      </div>
      ${getHTML(idDiv)}
      ${getHTML(picContainer)}
    </div>`
  }

  static CSS = `
  * {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
  }

  .contemporary-template {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    position: relative;
    padding: 10px;
    min-height: 1024px;
    box-sizing: border-box;
    background: #fff;
  }

  .contemporary-template__header__info {
    text-align: right;
    padding-bottom: 10px;
  }

  .contemporary-template .wv-heading--title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 26px;
    font-weight: 300;
    text-transform: uppercase;
  }
  .contemporary-template .wv-heading--subtitle {
    word-wrap: break-word;
    font-size: 18px;
    margin-top: 0;
    line-height: 22px;
  }
  .contemporary-template .address {
    margin-top: 10px;
  }
  .contemporary-template .address__field .wv-text {
    line-height: 22px;
  }

  .block {
    border: 1px solid #dee1e2 ;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .doctor {
    padding-right: 30px;
    width: 50%;
    display: inline-block;
  }

  .doctor 

  .package {
    text-align: right;
  }

  .notes .desc {
    font-size: 14px;
    font-weight: 600;
  }

  .package .desc {
    margin-top: 5px;
    font-size: 16px;
  }

  .label {
    font-size: 14px;
    padding-bottom: 10px;
  }

  .contemporary-template__metadata__customer--billing .wv-text--strong {
    font-size: 22px;
  }

  .package .wv-heading--title {
    font-size:16px;
  }

  .table-container div {
    padding: 5px;
  }

  .wv-table {
    width: 100%;
    font-size: 14px;
  }

  .wv-table tr th {
    text-align: right;
    padding: 0 5px;
    font-size: 16px;
  }

  .wv-table tr td {
    text-align: right;
    padding: 0 5px;
    font-size: 14px;

  }

  .bold {
    font-weight: 600;
  }

  .wv-table .left-align {
    text-align: left;
  }

  .wv-table .middle-align {
    text-align: center;
  }

  .other-table {
    width: 100%;
    font-size: 14px;
    margin-top: 20px;
    border: 1px solid #dee1e2;
    border-radius: 10px;
    border-collapse: collapse;
  }

  .other-table tr th {
    text-align: center;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #dee1e2;
    font-weight: 300;
  }

  .other-table tr td {
    text-align: center;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #dee1e2;
    font-weight: 300;
  }

  p {
    margin: 2px;
  }
  `
  static generate () {
    const css = Consent.CSS
    const body = document.createElement('body')
    const html = document.createElement('html')
    const head = document.createElement('head')
    const style = document.createElement('style')

    if (style.styleSheet) {
      style.styleSheet.cssText = css
    } else {
      style.appendChild(document.createTextNode(css))
    }

    body.innerHTML = Consent.template()

    head.appendChild(style)
    html.appendChild(head)
    html.appendChild(body)

    return getHTML(html)
  }
}

class SurgeryView {
  static printSurgeryDocs(selector, css) {
    const printWindow = window.open('', '', 'width=900,height=650')
    printWindow.document.write(Discharge.generate())
    printWindow.document.close()
    printWindow.focus()

    printWindow.document.querySelector('img').onload = function() {
      printWindow.print()
      // printWindow.close()
    }

    const printWindow2 = window.open('', '', 'width=900,height=650')
    printWindow2.document.write(Consent.generate())
    printWindow2.document.close()
    printWindow2.focus()

    printWindow2.document.querySelector('img').onload = function() {
      printWindow2.print()
      // printWindow2.close()
    }
  }

  static createPrintButton (selector, printCss) {
    const printBtn = document.createElement('button')
    printBtn.className = 'wv-button--secondary'
    printBtn.innerText = 'Print Surgery Docs'

    printBtn.addEventListener('click', () => 
      executeOnCreate('.contemporary-template', SurgeryView.printSurgeryDocs))

    const headerBtnGroup = document.querySelector(selector)
    headerBtnGroup.appendChild(printBtn)
  }

  static init () {
    console.log('Surgery View')
    executeOnCreate('.wv-header__actions', SurgeryView.createPrintButton,)
  }
}

class InvoiceView {

  static specific () {
    const printCss = `
    .contemporary-template__items table {
      border-collapse: collapse;
    }
    
    .contemporary-template__items table, .contemporary-template__items th, .contemporary-template__items td {
      border: 1px solid black;
    }

    .contemporary-template__items th, .contemporary-template__items td {
      padding: 10px 0px;
    }

    .contemporary-template .wv-table__header .wv-table__cell, .contemporary-template .wv-table__header .wv-table__cell--amount {
      text-transform: inherit;
      font-weight: 600;
      color: #000;
    }
    .wv-table{
      width: 100%;
    }
    .contemporary-template, .contemporary-template .wv-heading--subtitle, .contemporary-template .wv-heading--title, .contemporary-template .wv-table__cell, .contemporary-template .wv-table__cell--amount, .contemporary-template .wv-text, .contemporary-template .wv-text--strong {
      font-family: Helvetica, Arial, sans-serif;
    }
    .contemporary-template {
      font-size: 20px;
      position: relative;
      min-height: 1024px;
      box-sizing: border-box;
      background: #fff;
      color: #000;
    }
    .contemporary-template .wv-table__cell, .contemporary-template .wv-table__cell--amount, .contemporary-template .wv-text, .contemporary-template .wv-text--strong {
      font-size: 20px;
    }
    .contemporary-template .wv-heading--title {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 42px;
      font-weight: 300;
    }
    .contemporary-template .wv-heading--subtitle {
      font-size: 20px;
      line-height: 20px;
    }
    .contemporary-template .address {
      margin-top: 20px;
    }

    .contemporary-template__header__info strong.wv-text--strong {
      font-size: 24px;
    }
    .contemporary-template .wv-table, .contemporary-template .wv-text {
      font-size: 20px;
    }
    .contemporary-template .wv-table__cell {
      padding-left: 15px;
      padding-right: 15px;
      vertical-align: top;
      white-space: pre-line;
      word-break: break-word;
    }
    .contemporary-template .wv-table__cell:first-child {
      padding-left: 30px;
    }
    .contemporary-template .wv-table__cell--smaller {
      width: 105px;
      white-space: pre-line;
    }
    .contemporary-template .wv-table__cell--amount {
      padding-left: 15px;
      padding-right: 15px;
      width: 125px;
      vertical-align: top;
      white-space: pre-line;
    }
    .contemporary-template .wv-table__cell--amount:last-child {
      padding-right: 30px;
    }
    .contemporary-template .wv-table__row {
      border-bottom: inherit;
      width: 100%
    }
    .contemporary-template .wv-table__row .wv-table__cell--nested {
      color: #000;
      font-size: 18px;
    }
    .invoice-template-details {
      margin-top: 20px;
    }
    .contemporary-template__header {
      display: flex;
      margin: 25px 14px 0;
      justify-content: space-between;
    }
    .contemporary-template__header__logo img {
      max-height: 200px;
      max-width: 300px;
    }
    .contemporary-template__header__info {
      text-align: right;
      width: 442px;
    }
    .contemporary-template .invoice-template-details .wv-table__row--header .wv-table__cell:first-child {
      min-width: 125px;
    }
    .contemporary-template__metadata {
      margin-top: 10px;
      margin-left: 14px;
      margin-right: -16px;
      display: flex;
    }
    .contemporary-template__metadata__customer {
      flex-grow: 1;
      display: flex;
      width: 40%;
    }
    .contemporary-template__metadata__customer__wrapper {
      display: flex;
    }
    .contemporary-template__metadata__customer--billing {
      flex-grow: 1;
      padding-right: 10px;
    }
    .contemporary-template__metadata__customer--shipping {
      flex-grow: 3;
      padding-right: 10px;
    }
    .contemporary-template__metadata .invoice-template-details .wv-table__cell:first-child {
      text-align: right;
    }
    .contemporary-template__metadata .invoice-template-details .wv-table__cell:last-child {
      padding-left: 0;
    }
    .contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell:nth-child(2) {
      padding-right: 30px;
      min-width: 125px;
    }
    .contemporary-template__metadata .invoice-template-details .wv-table__row:last-child .wv-table__cell:nth-child(2) .wv-text--body {
      font-weight: 600;
    }
    .contemporary-template__metadata .wv-text--body {
      font-size:22px;
      line-height: 22px;
    }
    .contemporary-template__metadata .wv-text--strong {
      font-size:22px;
      line-height: 22px;
    }
    .contemporary-template__metadata__customer.fs-exclude {
      margin-top: -20px;
    }
    .contemporary-template__items {
      margin-top: 10px;
      margin-right: -16px;
      margin-left: -16px;
    }
    .contemporary-template__items .no-items-message, .contemporary-template__items__column--center {
      text-align: center;
    }
    .contemporary-template__totals {
      display: flex;
      margin-left: -16px;
      margin-right: -16px;
    }
    .contemporary-template__totals__blank {
      flex-grow: 5;
    }
    .contemporary-template__totals__amounts {
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 30px;
    }
    .contemporary-template__totals__amounts__line {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .contemporary-template__totals__amounts__line__amount {
      margin-left: 30px;
      min-width: 125px;
    }
    .contemporary-template__totals__amounts__line .wv-text--strong {
      font-size: 22px;
    }
    .contemporary-template__totals__amounts__line .wv-text.wv-text--body {
      font-size: 22px;
    }
    .contemporary-template__memo {
      margin: 0 14px 35px;
      white-space: pre-line;
      word-wrap: break-word;
    }
    .contemporary-template__memo > p {
      margin: 8px 0;
      display: block;
    }
    .contemporary-template__footer .wv-text.wv-text--hint {
      margin: 0 auto;
      text-align: center;
      font-size:16px;
      line-height: 20px;
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      white-space: pre-wrap;
    }
    p.wv-text.wv-text--hint {
      margin: 0;
    }
    .address p {
      margin: 6px;
    }`
    executeOnCreate('.wv-header__actions', InvoiceView.createPrintButton, printCss)
  }

  static quickPrint(selector, css) {
    const section = document
      .querySelector(selector)
      .cloneNode(true)

    stripStyles(section)
    section.querySelector("br").remove()
    section.querySelector(".contemporary-template__divider--full-width.contemporary-template__divider--bold").remove()
    // removeAndMergeParagraphs(section.querySelector(".address"))

    const invoiceNum = document.querySelector('.invoice-template-details tbody > tr:nth-child(1) > td:nth-child(2) > p').innerText
    const idDiv = document.createElement('span')
    idDiv.innerText = invoiceNum
    idDiv.style = 'font-size: 50px; font-weight: 700; position: absolute; top: 30px; left: calc(40%);padding:20px;border:2px solid #000;transform:translateX(-50%);'

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
      // printWindow.close()
    }
  }

  static createPrintButton (selector, printCss) {
    const printBtn = document.createElement('button')
    printBtn.className = 'wv-button--secondary'
    printBtn.innerText = 'Print Invoice'

    printBtn.addEventListener('click', () => 
      executeOnCreate('.contemporary-template', InvoiceView.quickPrint, printCss))

    const headerBtnGroup = document.querySelector(selector)
    headerBtnGroup.appendChild(printBtn)

  }

  static init() {
    InvoiceView.specific()
    logger("Invoice View", 'page')

    AutomateView.init()
    SurgeryView.init()
  }
}