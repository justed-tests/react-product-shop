let React = require('react')
let EmailField = require('./EmailField.jsx')
let NameField = require('./NameField.jsx')
let Reflux = require('reflux')
let Actions = require('../../reflux/Actions.jsx')
let EmailStore = require('../../reflux/EmailStore.jsx')

let LeadCapture = React.createClass({
  getInitialState: function () {
    return {
      submitted: false
    }
  },
  mixins: [Reflux.listenTo(EmailStore, 'onChange')],

  render: function () {
    let feedbackStyle = {
      visibility: this.state.submitted ? 'visible' : 'hidden'
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4>Subscribe?</h4>
        </div>
        <div className="panel-body">
          <NameField type="First" ref="fieldName" />
          <EmailField ref="fieldEmail" />
          <button className="btn btn-primary" onClick={this.onSubmit}> Submit </button>
          <span style={feedbackStyle} >Success</span>
        </div>
      </div>
    )
  },
  onSubmit: function () {
    if (!this.refs.fieldEmail.state.valid) {
      // let error = 'email is invalid'
    } else {
      let subscriber = {
        email: this.refs.fieldEmail.state.value,
        name: this.refs.fieldName.state.value
      }
      Actions.submitEmail(subscriber)

      this.refs.fieldEmail.clear()
      this.refs.fieldName.clear()
    }
  },

  onChange: function (msg) {
    window.alert(msg)
    this.setState({
      submitted: true
    })
  }
})

module.exports = LeadCapture
