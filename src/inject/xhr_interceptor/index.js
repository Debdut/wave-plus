import xhook from'xhook'
import WaveAPI from './api.js'

// Injected Message
console.log('[XHR Interceptor Script Injected]')

const API_URL = "https://api.waveapps.com"

// List of URL segments to be matched
const URLRegularExpressions = [
  '/invoices/$'
]

xhook.after(function(request, response) {
  if (isMatchedURL(request.url)) {
    const api = new WaveAPI(request, response)
  }
})

// Tests if url parameter matches any of urls in URLRegularExpressions
function isMatchedURL (url) {
  if (!url.includes(API_URL)) {
    return false
  }
  for (let index = 0; index < URLRegularExpressions.length; index++) {
    const re = new RegExp(URLRegularExpressions[index])
    if (re.test(url)) {
      return true
    }
  }
  return false
}