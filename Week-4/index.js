const PORT = process.env.PORT || 3000;

const path = require("path");
const express = require("express");
const app = express();

// will send a html page to localhost 3000
var root = path.join(__dirname, "/public");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(`${root}` + "/index.html");
});


// app.get("/style/main.css", (req, res) => {
//     res.sendFile(`${root}` + "/main.css");
// });


app.get("/:getData/", async function(req, res) {
    if (!req.query.number) {
        res.sendFile(`${root}` + "/error.html");
    } else {
        let number = +req.query.number;
        let sum = (number * number + number) / 2;
        res.send("sum is " + sum);
        res.end();
    }
});

app.listen(PORT);
