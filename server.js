const express = require('express')
const app = express()
const Firebase = require('firebase')
const FirebaseRef = new Firebase("https://forjim-185f5.firebaseapp.com")
app.use(express.static('client'))

app.get('/',  function(req,res){
  res.send('index.html')
})

app.listen(3000, function(){
  console.log('Say cheese on port 3000')
})
