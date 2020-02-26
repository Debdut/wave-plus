// Load Message
console.log('[Invoice CRUD Requests Listener Loaded]')

// // Message Passing
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log(request, sender)
//   sendResponse({msg: "nice to meet you"})
// })

chrome.webRequest.onBeforeRequest.addListener(
  (request) => {

    // Request Info
    console.log(`[Request URL: ${request.url}]\n[Request Method: ${request.method}]`)
    console.log(request)

    // Create Invoice Request
    if (request.method === "POST" && request.requestBody) {
      // Raw Data To String
      const body = decodeURIComponent(String.fromCharCode.apply(null,
        new Uint8Array(request.requestBody.raw[0].bytes)))

      // Parse Invoice JSON
      const invoice = JSON.parse(body)

      // Local Storage
      chrome.storage.local.set({ add_invoice: invoice }, function () {
        console.log(`[Invoice ${invoice.invoice_number} added and stored in Local Storage]`)
      })
    }

    // Edit Invoice Request
    if (request.method === "PATCH" && request.requestBody) {
      // Raw Data To String
      const body = decodeURIComponent(String.fromCharCode.apply(null,
        new Uint8Array(request.requestBody.raw[0].bytes)))

      // Parse Invoice JSON
      const invoice = JSON.parse(body)

      // Local Storage
      chrome.storage.local.set({ edit_invoice: invoice }, function () {
        console.log(`[Invoice ${invoice.invoice_number} edit and stored in Local Storage]`)
      })
    }
  },
  {urls: ["https://api.waveapps.com/businesses/*/invoices/*"]},
  ["requestBody"]
)