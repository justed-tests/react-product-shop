let React = require('react')

let NavItem = React.createClass({
  propTypes: {
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    aStyle: React.PropTypes.object
  },
  render: function () {
    return (
      <li>
        <a href={this.props.href} style={this.props.aStyle}>
          {this.props.title}
        </a>
      </li>
    )
  }
})

module.exports = NavItem
