const MATCHES = [
  {
    type: 'invoiceAdd',
    re: new RegExp('/invoices/$')
  }
]

const auth = 'wave-plus-z728-hs62'

class WaveAPI {

  constructor(request, response) {
    this.request = request
    this.response = response

    if (this.classify()) {
      this.action()
    }
  }

  classify() {
    for (let i = 0; i < MATCHES.length; i++) {
      const match = MATCHES[i]
      if (match.re.test(this.request.url)) {
        this.type = match.type
        return true
      }
    }
    return false
  }

  action() {
    this[this.type]()
  }

  invoiceAdd() {
    console.log('[Invoice Added]')
    const invoice = JSON.parse(this.response.data)

    // Message Passing for non CORS
    // window.postMessage({auth, type: 'invoiceAdd', invoice}, '*')
  }
}

export default WaveAPI