export default ({ price, downpayment, months, years, interest, montlyPay, interestCost}) => `
  <div class="container">
    <div class="row">
      <div class="col s6">
        <div class="input-field">
          <input class="validate price" type="number" id="price" value="${price || ''}"/>
          <label class="active" for="price">$ Price</label>
        </div>
        <div class="input-field">
          <input class="validate down" type="number" id="down" value="${downpayment || ''}"/>
          <label class="active" for="down">$ Downpayment</label>
        </div>
        <div class="input-field">
          <input class="validate interest" type="number" id="interest" value="${interest || ''}"/>
          <label class="active" for="interest">% Interest Rate</label>
        </div>
        <div class="row">
          <div class="input-field col s5">
            <input class="validate months" type="number" id="month" value="${months || ''}"/>
            <label class="active" for="month">Months Duration</label>
          </div>
          <span class="col s2">
            or
          </span>
          <div class="input-field col s5">
            <input class="validate years" type="number" id="years" value="${years || ''}"/>
            <label class="active" for="years">Years Duration</label>
          </div>
        </div>
      </div>
      <div class="col s6">
      <div class="card-panel teal">
        <h5>Auto payment result</h5>
        <p>Interest default %4</p>
        <p>Months default 60</p>
        <p>Monthly automobile payment amount:</p>
        <h3 class="total">$ ${!montlyPay ? 0 : montlyPay} /mo</h3>
        <p>Total Interest cost:</p>
        <h3 class="cost">$ ${!interestCost ? 0 : interestCost}</h3>
      </div>
      </div>
    </div>
  </div>
`
