export default ({ price, downpayment, months, years, interest, montlyPay, interestCost}) => `
  <div class="container">
    <div class="row">
      <div class="col s6">
        <div class="input-field">
          <input class="validate" type="number" id="price" value="${price}"/>
          <label class="active" for="price">$ Price</label>
        </div>
        <div class="input-field">
          <input class="validate" type="number" id="down" value="${downpayment}"/>
          <label class="active" for="down">$ Downpayment</label>
        </div>
        <div class="input-field">
          <input class="validate" type="number" id="interest" value="${interest}"/>
          <label class="active" for="interest">% Interest Rate</label>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input class="validate" type="number" id="month" value="${months}"/>
            <label class="active" for="month">Months Duration</label>
          </div>
          <div class="input-field col s6">
            <input class="validate" type="number" id="years" value="${years}"/>
            <label class="active" for="years">Years Duration</label>
          </div>
        </div>
      </div>
      <div class="col s6">
      <div class="card-panel teal">
        <h5>Auto payment result</h5>
        <p>Monthly automobile payment amount:</p>
        <h3>$1000</h3>
        <p>Total Interest cost:</p>
        <h3>$500</h3>
      </div>
      </div>
    </div>
  </div>
`
