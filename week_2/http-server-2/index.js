const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000
app.use(bodyParser.json());
app.get('/', (req, res) => {
    console.log(req.body);
    res.send('<b>Yo buddy!</b>')
})

app.post('/', (req, res) => {
    console.log(req.body);

    res.send({
        msg: "2 + 2 = 4"
    }
    )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 