let React = require('react')
let NavBar = require('./nav/NavBar.jsx')
let LeadCaputre = require('./forms/LeadCapture.jsx')

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
        <div className="row">
          <div className="col-sm-9">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>Some Title</h4>
              </div>
              <div className="panel-body">
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <LeadCaputre onSubmit={this.formSubmit} onError={this.formError} />
          </div>
        </div>
      </div>
    )
  },
  formSubmit: function (data) {
    window.alert(data.email)
  },
  formError: function (msg) {
    window.alert(msg)
  }
})

module.exports = BasePage
