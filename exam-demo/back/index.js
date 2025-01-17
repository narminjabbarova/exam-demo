
const express = require('express')
const mongoose = require('mongoose');
const productRouter = require("./routes/productRoute")
const cors  = require('cors')
const app = express()

const DB_URL = "mongodb+srv://narminjabbar:narmin2005@cluster0.qce9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((cors()))
app.use("/api/products", productRouter)

mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT},  url is http://localhost:3000/api/products`)
    })
    console.log('Connected!')
  });