let React = require('react')
let ReactDOM = require('react-dom')
let NavBar = require('./components/nav/NavBar.jsx')

let navLinks = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Courses',
    href: '#'
  },
  {
    title: 'Blog',
    href: '#'
  }
]

ReactDOM.render(<NavBar bgColor="#FFF" titleColor="#3097d1" navData={navLinks} />, document.getElementById('nav'))
