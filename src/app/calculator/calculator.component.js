import template from './calculator.template'
import style from './calculator.css'

export class CalculatorComponent extends HTMLElement {
  static get selector () { return 'app-calculator' }

  constructor () {
    super();
    this.setDefaultValues()
    this.render()
  }

  setDefaultValues () {
    this.price = 0
    this.downpayment = 0
    this.duration = 0
    this.months = 0
    this.years = 0
    this.interest = 0
    this.montlyPay = 0
    this.interestCost = 0
  }

  render () {
    const innerHTML = template({
      price: this.price,
      downpayment: this.downpayment,
      duration: this.duration,
      month: this.months,
      years: this.years,
      interest: this.interest,
      montlyPay: this.montlyPay,
      interestCost: this.interestCost
    })

    this.innerHTML = `
      <style>${style}</style>
      ${innerHTML}
    `
    this.addEventListeners()
  }

  addEventListeners () {
    this.querySelector('.price').addEventListener('keyup', () => this.updatePrice())
    this.querySelector('.downpayment').addEventListener('keyup', () => this.updateDownpayment())
    this.querySelector('.month').addEventListener('keyup', () => this.updateMonth())
  }

  updatePrice (price) {
    console.debug('updatePrice', price)
    this.price = price
  }

  updateDownpayment (pay) {
    console.debug('updateDownpayment', pay)
    this.downpayment = pay
  }

  updateMonth (month) {
    console.debug('updateMonth', month)
  }
}
