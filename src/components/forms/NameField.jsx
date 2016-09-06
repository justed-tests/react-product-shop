let React = require('react')

let NameField = React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },
  render: function () {
    return (
      <div className="form-group">
        <input className="form-control"
          onChange={this.onChange}
          placeholder={this.props.type + ' Name'}
          value={this.state.value} />
      </div>
    )
  },
  getInitialState: function () {
    return {
      value: ''
    }
  },
  onChange: function (e) {
    let target = e.target
    let value = target.value

    this.setState({
      value: value
    })
  },
  clear: function () {
    this.setState({
      value: ''
    })
  }
})

module.exports = NameField
