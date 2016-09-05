let React = require('react')

let NavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    aStyle: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      hover: false
    }
  },
  render: function () {
    return (
      <li
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
        className={this.state.hover ? 'active' : ''}
      >
        <a href={this.props.href} style={this.props.aStyle}>
          {this.props.title}
        </a>
      </li>
    )
  },
  mouseOver: function () {
    this.setState({hover: true})
  },
  mouseOut: function () {
    this.setState({hover: false})
  }
})

module.exports = NavItem
