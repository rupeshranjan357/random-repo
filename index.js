const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3000
app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.post('/conversation', (req, res) => {
    const message=req.body;
    console.log(message);
    res.json({
      output: "2+2=4"
    })
})
//doubt ??
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})