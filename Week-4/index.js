const PORT = process.env.PORT || 3000;

const path = require("path");
const express = require("express");
const app = express();

// will send a html page to localhost 3000
var public = path.join(__dirname, "/public");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(`${public}` + "/index.html");
});

app.get("/:getData/", async function(req, res) {
    if (!req.query.number) {
        res.sendFile(`${public}` + "/error.html");
    } else {
        let number = +req.query.number;
        let total = (number * number + number) / 2;
        res.send({sum: total});
        res.end();
    }
});

app.listen(PORT);
