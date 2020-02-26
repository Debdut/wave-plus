// Injection
function inject() {

  console.log('[Injection Started]')

  // List of Scripts
  const scripts = {}

  // // Xhook script
  // const xhook = document.createElement('script')
  // xhook.src = chrome.runtime.getURL('vendor/xhook/xhook.js')
  // xhook.id = '__injected--lib-xhook'

  // scripts.xhook = xhook

  // XHR Interceptor script
  const interceptor = document.createElement('script')
  interceptor.src = chrome.runtime.getURL('inject/xhr_interceptor.js')
  interceptor.id = '__injected--custom-xhrinterceptor'

  scripts.interceptor = interceptor

  // Injecting the Scripts
  for (const key in scripts) {
    if (scripts.hasOwnProperty(key)) {
      const script = scripts[key]
      document.documentElement.appendChild(script)
    }
  }

  console.log('[Injection Completed]')
}

// Init
// inject()

// Content Scripts by Page and Mode
import invoiceAdd from './invoice-add'
import invoiceView from './invoice-view'
import invoiceList from './invoice-list'

const PagesRegex = {
  invoiceAdd: '^https://next.waveapps.com/.*/invoices/add$',
  invoiceView: '^https://next.waveapps.com/.*/invoices/.*/view$',
  invoiceList: '^https://next.waveapps.com/.*/invoices$'
}

const Executables = {
  invoiceAdd,
  invoiceList,
  invoiceView
}

function getPage() {
  const url = location.href
  for (const page in PagesRegex) {
    if (PagesRegex.hasOwnProperty(page)) {
      const regex = new RegExp(PagesRegex[page])
      if (regex.test(url)) {
        return page
      }
    }
  }

  return
}

// Demo Mode Change With Chrome Storage
const modes = {
  automate: true,
  surgery: true,
  // optics: true
}

function init() {
  const page = getPage()
  if (page) {
    Executables[page].init(page, modes)
  }
}

// Initiate
let url = location.href
document.body.addEventListener('click', () => {
    requestAnimationFrame(() => {
      if (url !== location.href) {
        init()
      }
      url = location.href
    })
}, true)

init()