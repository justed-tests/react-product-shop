let React = require('react')
let EmailField = require('./EmailField.jsx')
let NameField = require('./NameField.jsx')

let LeadCapture = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func,
    onError: React.PropTypes.func
  },
  render: function () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Subscribe?</h4>
        </div>
        <div className="panel-body">
          <NameField type="First" ref="fieldName" />
          <EmailField ref="fieldEmail" />
          <button className="btn btn-primary" onClick={this.onSubmit}> Submit </button>
        </div>
      </div>
    )
  },
  onSubmit: function () {
    if (!this.refs.fieldEmail.state.valid) {
      let error = 'email is invalid'
      if (this.props.onError) this.props.onError(error)
    } else {
      let email = this.refs.fieldEmail.state.value
      let name = this.refs.fieldName.state.value
      let result = {
        email: email,
        name: name
      }
      if (this.props.onSubmit) this.props.onSubmit(result)
      this.refs.fieldEmail.clear()
      this.refs.fieldName.clear()
      console.log('do submit')
      console.log(result)
    }
  }
})

module.exports = LeadCapture
