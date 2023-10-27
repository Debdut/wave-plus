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

// Demo Mode Change With Chrome Storage
  static modes = {
    automate: true,
    surgery: true
  }

  static init() {
    executeOnCreate('.wv-notify--info.row-warning-notif', removeNode)
    let url = location.href
    document.body.addEventListener('click', () => {
        requestAnimationFrame(() => {
          if (url !== location.href) {
            Global.init()
          }
          url = location.href
        })
    }, true)

    const page = Global.getPage()

    if (page === "InvoiceAdd") {
      InvoiceAdd.init()
    } else if (page === "InvoiceView") {
      InvoiceView.init()
    }
  }
}

Global.init()