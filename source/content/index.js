class Global {
  static PagesRegex = {
    InvoiceAdd: '^https://next.waveapps.com/.*/invoices/add$',
    InvoiceView: '^https://next.waveapps.com/.*/invoices/.*/view$',
  }

  static Executables = {
    InvoiceAdd,
    InvoiceView
  }

  static getPage() {
    const url = location.href
    for (const page in Global.PagesRegex) {
      if (Global.PagesRegex.hasOwnProperty(page)) {
        const regex = new RegExp(Global.PagesRegex[page])
        if (regex.test(url)) {
          return page
        }
      }
    }

    return
  }

  static execute() {
    const page = Global.getPage()

    if (page === "InvoiceAdd") {
      InvoiceAdd.init()
    } else if (page === "InvoiceView") {
      InvoiceView.init()
    }
  }

  static init() {
    executeOnCreateForever('.wv-notify--info.row-warning-notif', removeNode)
    onURLChange()
    chrome.storage.onChanged.addListener(function(changes, namespace) {
      for (var key in changes) {
        if (key === 'location') {
          Global.execute()
        }
      }
    });  
  }
}

chrome.storage.sync.set({location: location.href})
Global.init()