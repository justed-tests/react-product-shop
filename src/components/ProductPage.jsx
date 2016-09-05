let React = require('react')

let ProductPage = React.createClass({
  propTypes: {
    params: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      pid: ''
    }
  },

  componentDidMount: function () {
    this.setState({pid: this.props.params.productId})
  },

  componentWillReceiveProps (newProps) {
    this.setState({pid: newProps.params.productId})
  },

  render: function () {
    return (
      <div>
        <h1>Hi im a product number {this.state.pid}</h1>
      </div>
    )
  }
})

module.exports = ProductPage
