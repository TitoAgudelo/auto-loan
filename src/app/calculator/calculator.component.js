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
    this.price = undefined
    this.downpayment = undefined
    this.months = 60
    this.years = undefined
    this.interest = 4
    this.montlyPay = undefined
    this.interestCost = undefined
  }

  setInitialValues () {
    this.months = 60
    this.interest = 4
    this.querySelector('.months').value = this.months
    this.querySelector('.interest').value = this.interest
    this.calculateTotal()
  }

  render () {
    const innerHTML = template({
      price: this.price,
      downpayment: this.downpayment,
      months: this.months,
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
    this.querySelector('.price').addEventListener('keyup', price => this.updatePrice(price))
    this.querySelector('.down').addEventListener('keyup', down => this.updateDownpayment(down))
    this.querySelector('.months').addEventListener('keyup', months => this.updateMonth(months))
    this.querySelector('.years').addEventListener('keyup', years => this.updateYears(years))
    this.querySelector('.interest').addEventListener('keyup', interest => this.updateInterest(interest))
  }

  calculateTotal () {
    if (this.price > 0 && this.interest > 0 && this.months > 0) {
      const intMonth = this.interest / 1200
      this.montlyPay = ((this.price / this.months) + (this.price * intMonth))
      this.interestCost = this.calculateCost()
      this.setPayCost()
    } else {
      window.alert('please complete the data to calculate the auto loan')
    }
  }

  calculateCost () {
    const interest = 0;
    let amount = this.price
    let cost = 0
    if (this.months > 0) {
      for (var i = 0; i < this.months; i++) {
        cost = cost + (amount * this.interest / 1200)
        amount = amount - (amount / this.months)
      }
    }
    return cost
  }

  setPayCost () {
    const totalElement = this.querySelector('.total')
    const totalCost = this.querySelector('.cost')
    totalElement.innerHTML = Math.floor(this.montlyPay) + ' /mo'
    totalCost.innerHTML = Math.floor(this.interestCost)
  }

  updatePrice (price) {
    this.price = parseInt(price.srcElement.value)
    this.calculateTotal()
  }

  updateDownpayment (pay) {
    this.downpayment = parseInt(pay.srcElement.value)
    if (this.downpayment > 0) {
      this.price = this.price - this.downpayment
    } else if (this.downpayment > this.price){
      this.querySelector('.down').value = 0
      window.alert('downpayment should not be this value beause price is lower')
    }
    this.calculateTotal()
  }

  updateMonth (months) {
    if (!months.srcElement.value) {
      return this.setInitialValues()
    }
    const years = this.querySelector('.years')
    this.months = parseInt(months.srcElement.value)
    this.years = this.months / 12
    years.value = this.months / 12
    this.calculateTotal()
  }

  updateYears (years) {
    if (!years.srcElement.value) {
      return this.setInitialValues()
    }
    const months = this.querySelector('.months')
    this.years = parseInt(years.srcElement.value)
    months.value = this.years * 12
    this.months = this.years * 12
    this.calculateTotal()
  }

  updateInterest (interest) {
    this.interest = parseInt(interest.srcElement.value)
    this.calculateTotal()
  }
}
