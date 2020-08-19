const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pt', (req, res) => {
    res.send('Olá Mundo!')
})

app.post("/post", function (req, res) {
  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})