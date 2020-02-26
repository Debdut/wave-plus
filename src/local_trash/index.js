import OpticsChooser from './html/optics_chooser.html'

// Constants
const INVOICE_SELECTOR = '#Content .invoice-add__body'

// Script Injected
console.clear()
console.log('[Optics Store Injected]')

function htmlToElement(html) {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  return template.content.firstChild
}

function executeOnCreate (selector, f) {
  let element = document.querySelector(selector)
  if (element) {
    f(element)
  } else {
    setTimeout(() => executeOnCreate(selector, f), 50)
  }
}

function inject(parent) {
  const child = htmlToElement(OpticsChooser)

  parent.insertBefore(child, parent.childNodes[1])
}

executeOnCreate(INVOICE_SELECTOR, inject)