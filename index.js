function enter(x) {
    // document.getElementById(x).style.borderBottomColor = "red"
    document.getElementById(x).style.cursor = "pointer"
    
}
function leave(x){
    // document.getElementById(x).style.borderBottomColor = "lightslategray"
}

function switchPage(page){
    window.location.href = page;
}

function enter2(x){
    document.getElementById(x).style.scale = "1.2"
}
function leave2(x){
document.getElementById(x).style.scale = "1"}

value = 1

function show(){
    if(value == 1){
        document.getElementById("linkHolderButton").style.visibility = "hidden";
        document.getElementById("dropdownMenu").style.visibility = "visible";
        value = 2
    }
    else if(value == 2){
        document.getElementById("linkHolderButton").style.visibility = "visible"
        document.getElementById("dropdownMenu").style.visibility = "hidden";
        value = 1
    }
}