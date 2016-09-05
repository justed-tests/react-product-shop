let React = require('react')
let NavItem = require('./NavItem.jsx')
let ReactRouter = require('react-router')
let Link = ReactRouter.Link

let NavBar = React.createClass({
  propTypes: {
    navData: React.PropTypes.array,
    bgColor: React.PropTypes.string,
    titleColor: React.PropTypes.string,
    linkColor: React.PropTypes.string
  },

  render: function () {
    let navStyle = {
      boxShadow: '0 0 4px rgba(0, 0, 0, 0.4)',
      borderRadius: 0
    }

    let titleStyle = {}
    let linkStyle = {}

    if (this.props.bgColor) navStyle.background = this.props.bgColor
    if (this.props.titleColor) titleStyle.color = this.props.titleColor
    if (this.props.linkColor) linkStyle.color = this.props.linkColor

    let createLinkItem = function (item, index) {
      return (
        <NavItem aStyle={linkStyle} key={item.title + index} href={item.href} title={item.title} />
      )
    }
    return (
      <div>
        <nav style={navStyle} className="navbar navbar-default">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#nav-collpase">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link style={titleStyle} className="navbar-brand" to="/">Product Shop</Link>
          </div>
          <div className="collapse navbar-collapse" id="nav-collapse">
            <ul className="nav navbar-nav">
              {this.props.navData.map(createLinkItem)}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
})

module.exports = NavBar
