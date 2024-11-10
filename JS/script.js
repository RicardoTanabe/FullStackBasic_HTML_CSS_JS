document.getElementById("header").innerHTML = fetch('MODEL/header.html')
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);

document.getElementById("footer").innerHTML = fetch('MODEL/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById("footer").innerHTML = data);

const menuList = ["cachorro", "gato", "passaro", "peixe",
    "outrospets", "casaejardim", "promocoes", "servicos", "clubes"]

const menuListDict = {
    "cachorro": ["racao", "petiscoseossos", "tapetesfraldasebanheiros",
        "farmacia"],
    "gato": [],
    "passaro": [],
    "peixe": [],
    "outrospets": [],
    "casaejardim": [],
    "promocoes": [],
    "servicos": [],
    "clubes": [],
    "racao": ["racaoseca", "racaoumida", "vertodos"],
    "petiscoseossos": ["cuidadooral", "petiscosnaturais", "vertodos"],
    "tapetesfraldasebanheiros": ["tapeteshigienicos", "fraldas", "vertodos"],
    "farmacia": ["antipulgasecarrapatos", "demaismedicamentos", "vertodos"],
}