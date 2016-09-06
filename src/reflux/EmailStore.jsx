let HTTP = require('../services/HttpService.js')
let Reflux = require('reflux')
let Actions = require('./Actions.jsx')

let EmailStore = Reflux.createStore({
  listenables: [Actions],
  init: function () {
    this.emails = []
  },
  submitEmail: function (subscriber) {
    HTTP
      .post('/subscribers', subscriber)
      .then((response) => {
        let msg = ''
        if (response.status === 200) {
          msg = 'Email submited'
        } else {
          msg = 'Submission failed!'
        }

        this.trigger(msg)
      })
      .catch((data) => {
        let msg = 'no back - no fun'
        this.trigger(msg)
      })
  }
})

module.exports = EmailStore
