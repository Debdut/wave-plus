import { executeOnCreate } from '../../util'

function init() {
  executeOnCreate('.invoice-view-payment-section__content button', autoPay)
}

// Automate Payment
function autoPay (selector) {
  const btn = document.querySelector(selector)
  btn.click()
  executeOnCreate ('.wv-form--horizontal .wv-select__input', 
  function (s1) {
    const btn2 = document.querySelector(s1)
    btn2.click()
    executeOnCreate('.wv-select__menu > ul > div:nth-child(2)', function(s2) {
      const btn3 = document.querySelector(s2)
      btn3.click()
      executeOnCreate ('.wv-form--horizontal .wv-select__input',
      function(s3) {
        const btn4 = document.querySelectorAll(s3)[1]
        btn4.click()
        executeOnCreate ('.wv-select__menu > ul > div:nth-child(1)',
        function(s4) {
          const btn5 = document.querySelector(s4)
          btn5.click()
        })
      })
    })
  })
}


export default {
  init
}