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

// value = 0

// function show(add){
//     value += add
//     console.log(value)
//     if(value > 1){
//         document.getElementById("linkHolderButton").style.visibility = "hidden";
//         document.getElementById("dropdownMenu").style.visibility = "visible";
//     }
//     else{
//         document.getElementById("linkHolderButton").style.visibility = "visible"
//         document.getElementById("dropdownMenu").style.visibility = "hidden";
//     }
//     if(value < 1){
//         value = 0;
//     }
// }

window.onclick = function (event) {
    if(event.target.matches("#linkImg")){
        document.getElementById("linkHolderButton").style.visibility = "hidden";
        document.getElementById("dropdownMenu").style.visibility = "visible";
    }
    else if(window.innerWidth < 600){
        document.getElementById("linkHolderButton").style.visibility = "visible"
        document.getElementById("dropdownMenu").style.visibility = "hidden";
    }
}
