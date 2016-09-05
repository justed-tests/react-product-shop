let React = require('react')
let NavBar = require('./nav/NavBar.jsx')

let navLinks = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'First',
    href: '/product/55'
  },
  {
    title: 'Second',
    href: '/product/67'
  }
]

let BasePage = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render: function () {
    return (
      <div>
        <NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />
        {this.props.children}
      </div>
    )
  }
})

module.exports = BasePage
