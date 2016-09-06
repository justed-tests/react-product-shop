let React = require('react')
let validator = require('email-validator')

let EmailField = React.createClass({
  render: function () {
    let formClass = this.state.valid || this.state.notChanged ? 'form-group' : 'form-group has-error'

    return (
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
      </div>
    )
  },
  getInitialState: function () {
    return {
      valid: false,
      notChanged: true,
      value: ''
    }
  },
  onChange: function (e) {
    var value = e.target.value
    var isValid = validator.validate(value)
    this.setState({
      value: value,
      valid: isValid,
      notChanged: false
    })
  },
  clear: function () {
    this.setState({
      value: ''
    })
  }

})

module.exports = EmailField
