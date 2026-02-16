function enter(x) {
    document.getElementById(x).style.cursor = "pointer"
}



function switchPage(page){
    window.location.href = page;
}



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

window.onload = function(){
    console.log(document.getElementById("jan").offsetHeight)
    console.log(document.getElementById("jan").offsetWidth)
    document.getElementById("jan").style.height = document.getElementById("jan").offsetWidth + "px"

}
