const auth = 'wave-plus-z728-hs62'

window.addEventListener('message', function(event) {
  if (event.origin === "https://next.waveapps.com" && event.isTrusted) {
    if(event.data) {
      if(event.data.auth === auth) {
        
      }
    }
  }
}, false)