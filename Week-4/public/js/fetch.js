let xhttp = new XMLHttpRequest();
let input = document.getElementById("input");
let result = document.getElementById("result");
let hint = document.querySelector(".hint");
let targetNumber = document.querySelectorAll(".number");

function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.onload = function() {
            if (req.status === 200 && req.readyState === 4) {
                resolve(req.responseText);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

// handle input logic
input.addEventListener(
    "input",
    function(e) {
        let number = +e.target.value;
        url = "/getData?number=" + number;
        if (number < 0 || !e.target.value) {
            hint.innerHTML = "Enter a number greater than zero";
            result.innerHTML = "?";
        } else {
            hint.innerHTML = "The sum is";
            targetNumber.forEach(n => (n.innerHTML = number));
            get(url).then(text => {
                let response = JSON.parse(text);
                text = response.sum;
                result.innerHTML = text;
            });
        }
    },
    false,
);
