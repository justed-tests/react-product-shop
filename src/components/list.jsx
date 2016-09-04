var React = require('react')
var ListItem = require('./list_item.jsx')

var ingredients = [
  {
    id: 1,
    text: 'cheese'
  },
  {
    id: 2,
    text: 'ham'
  },
  {
    id: 3,
    text: 'potatoes'
  }
]

var List = React.createClass({
  render: function () {
    var items = ingredients.map(function (item) {
      return <ListItem key={item.key} ingredient={item.text} />
    })
    return (
      <ul>
        {items}
      </ul>
    )
  }
})

module.exports = List
