let React = require('react')

let ReactRouter = require('react-router')
let Router = ReactRouter.Router
let Route = ReactRouter.Route
let hashHistory = ReactRouter.hashHistory
let IndexRoute = ReactRouter.IndexRoute

let BasePage = require('./components/BasePage.jsx')
let HomePage = require('./components/HomePage.jsx')
let ProductPage = require('./components/ProductPage.jsx')

let Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={BasePage}>
      <IndexRoute component={HomePage} />
      <Route path="/product/:productId" component={ProductPage} />
    </Route>
  </Router>
)

module.exports = Routes
