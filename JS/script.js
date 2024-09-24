document.getElementById("header").innerHTML = fetch('MODEL/header.html')
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);

document.getElementById("footer").innerHTML = fetch('MODEL/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);