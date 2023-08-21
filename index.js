const express = require('express')
const app = express()
const port = 8083

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cmh131:1234@cluster0.af4f3nz.mongodb.net/', {
    //useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})