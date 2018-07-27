console.log(input);

var xhttp = new XMLHttpRequest(),
    url = "";
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};

document.addEventListener(
    "DOMContentLoaded",
    function(e) {
        // url = `/getData?number=${e.target.value}`;
        var input = document.querySelector("input");
        console.log(e.target.value);

    },
    false,
);

xhttp.open("GET", url, true);
xhttp.send();
