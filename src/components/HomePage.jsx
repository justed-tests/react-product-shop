let React = require('react')
let ReactRouter = require('react-router')
let Link = ReactRouter.Link

let HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/product/55" > First </Link></li>
          <li><Link to="/product/67" > Second </Link></li>
        </ul>
      </div>
    )
  }
})

module.exports = HomePage
