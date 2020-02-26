function inject() {
  
  console.log('[Script Injection Started]')

  // Create script tag
  const script = document.createElement('script')
  script.id = '__injectedScript'
  script.textContent = `${monkeyPatch.toString()}
  monkeyPatch()`
  document.documentElement.appendChild(script)
  // script.remove()
  
  console.log('[Script Injection Done]')
}

function checkDOM() {
  if(document.body && document.head) {
    inject()
  } else {
    requestIdleCallback(checkDOM)
  }
}

function getXHRData() {
  const hiddenDOMElement = document.getElementById('__interceptedData')
  if (hiddenDOMElement) {
    const response = hiddenDOMElement.innerHTML
  } else {
    requestIdleCallback(getXHRData)
  }
}

// Injectible Function
function monkeyPatch() {
  const urlMatcher = (url) => url.includes('api.waveapps.com')
  const XHRPrototype = XMLHttpRequest.prototype
  
  XMLHttpRequest.prototype.open = function(...arguments) {
    this.method = arguments[0]
    this.url = arguments[1]
    console.log(this.method, this.url)
    return XHRPrototype.open(this, arguments)
  }

  XMLHttpRequest.prototype.send = function(...arguments) {
    // this.addEventListener('load', function() {
    //   // if (this.url) {
    //   //   const hiddenDOMElement = document.createElement('div')
    //   //   hiddenDOMElement.id = '__interceptedData'
    //   //   hiddenDOMElement.innerText = this.response
    //   //   hiddenDOMElement.style.height = 0
    //   //   hiddenDOMElement.style.overflow = 'hidden'
    //   //   document.body.appendChild(hiddenDOMElement)
    //   // }
    // })
    return XHRPrototype.send(this, arguments)
  }
}


// Init
inject()
requestIdleCallback(checkDOM)
requestIdleCallback(getXHRData)

// Script Loaded Message
