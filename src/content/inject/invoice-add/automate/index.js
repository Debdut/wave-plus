import { executeOnCreate } from '../../util'

function init() {
  executeOnCreate('.invoice-customer__without-customer__box__button', addCustomer)
}

// Automate Add Customer and Focus
function addCustomer (selector) {
  const btn = document.querySelector(selector)
  btn.click()
  executeOnCreate ('.invoice-customer__without-customer__box .wv-select__footer', function (s) {
    const btnNext = document.querySelector(s)
    btnNext.click()
    executeOnCreate('.invoice-add__body__top-form__customer  .wv-form-field.is-required input', function(s0) {
      const inp = document.querySelector(s0)
      inp.focus()
    })
  })
}


export default {
  init
}