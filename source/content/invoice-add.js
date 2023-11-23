class SurgeryAdd {
  static init() {
    executeOnCreate('.invoice-add__body__items', SurgeryAdd.addOptions)
    executeOnCreate('.invoice-metadata .wv-form-field:nth-child(4) > label > div', SurgeryAdd.changePaymentDueTitle)
  }

  static changePaymentDueTitle (selector) {
    const pdue = document.querySelector(selector)
    pdue.innerText = 'Operation Date'
  } 

  static dataPoints = {}

  static register (id) {
    SurgeryAdd.dataPoints[id] = ''
  }

  static reactChange (data, key) {
    SurgeryAdd.dataPoints[key] = data
    const textArea = document.querySelector('.invoice-memo .wv-textarea')
    if (textArea) {
      textArea.value = objectToString(SurgeryAdd.dataPoints)
    }
  }

  static addOptions (selector) {
    const referenceNode = document.querySelector(selector)
    
    if (referenceNode.querySelector('.surgery-options')) {
      return
    }

    const optionsNode = document.createElement('div')
    optionsNode.className = '.surgery-options'
    optionsNode.style = 'padding-bottom: 10px;display:grid;grid-template-columns:1fr 1fr;'

    optionsNode.appendChild(SurgeryAdd.options('operative-eye', ['Left', 'Right']))
    optionsNode.appendChild(SurgeryAdd.options('surgeon', Doctors.map(d => d.name)))
    optionsNode.appendChild(SurgeryAdd.input('biometry'))
    optionsNode.appendChild(SurgeryAdd.input('addtional-details'))
    optionsNode.appendChild(SurgeryAdd.input('left-eye-vision'))
    optionsNode.appendChild(SurgeryAdd.input('right-eye-vision'))

    referenceNode.parentNode.insertBefore(optionsNode, referenceNode.nextSibling)
  }

  static options (id, list) {
    SurgeryAdd.register(id)

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
        SurgeryAdd.reactChange(op, id)
        const selectedBtn = document.querySelector(`#${id} .wv-button--primary`)
        if (selectedBtn) {
          selectedBtn.className = 'wv-button--secondary'
        }

        btn.className = 'wv-button--primary'
      })
    })
    return btnGroup
  }

  static input (id) {
    SurgeryAdd.register(id)

    const inputGroup = document.createElement('div')
    inputGroup.id = id

    const title = document.createElement('h4')
    title.innerText = snakeToTitle(id)

    inputGroup.appendChild(title)

    const inp = document.createElement('input')
    inp.className = 'wv-input wv-input'
    inputGroup.appendChild(inp)

    inp.addEventListener('keyup', () => SurgeryAdd.reactChange(inp.value, id))
    return inputGroup
  }
}

class AutomateAdd {
  static init() {
    executeOnCreate('.invoice-customer__without-customer__box__button', AutomateAdd.addCustomer)
  }

  // Automate Add Customer and Focus
  static addCustomer (selector) {
    const btn = document.querySelector(selector)
    btn.click()
    executeOnCreate ('.invoice-add__body__top-form__customer .wv-select__footer > span', function (s) {
      const btnNext = document.querySelector(s)
      btnNext.click()
      executeOnCreate('#customer-modal-tabs-panel-0 .wv-form-field input', function(s0) {
        const inp = document.querySelector(s0)
        inp.focus()
      })
    })
  }
}

class InvoiceAdd {

  static init() {
    logger("Invoice Add", 'page')
    AutomateAdd.init()
    SurgeryAdd.init()
  }
}