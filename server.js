const express = require('express')
const app = express()
const Firebase = require('firebase')
const FirebaseRef = new Firebase("https://forjim-185f5.firebaseapp.com")
app.use(express.static('client'))

app.get('/',  function(req,res){
  res.send('index.html')
})

const port = process.env.PORT || 3000
app.listen(port, function(){
console.log('We have lift off on port' + port)
})
