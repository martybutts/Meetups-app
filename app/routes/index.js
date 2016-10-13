var express = require('express')
var router = express.Router()


router.get('/', function(req, res) {
  res.send(`
    <link rel="stylesheets" type="text/css" href="styles/main.css"  
    <h1>Welcome</h1>
    <img src="/images/misc/baclground.jpg" alt="background" style="height: 300px;">
    <p>Hutt Artists Meetups put together artists from all walks of life</p>
  `)
})

module.exports = router
