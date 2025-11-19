    let titel = document.getElementById("titel")
function enter(x) {
    document.getElementById(x).style.borderBottomColor = "red"
}
function leave(x){
    document.getElementById(x).style.borderBottomColor = "lightslategray"
}

function switchPage(page){
    window.location.href = page;
}

function enter2(x){
    document.getElementById(x).style.scale = "1.2"
}
function leave2(x){
document.getElementById(x).style.scale = "1"}