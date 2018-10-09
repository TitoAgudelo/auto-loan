import { CalculatorComponent } from './app/calculator/calculator.component'

const components = [
  CalculatorComponent
]

components.forEach(component => customElements.define(component.selector, component))
