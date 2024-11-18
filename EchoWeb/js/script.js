function changeText(){
    var e = document.getElementById("tSize")
    var text =document.getElementById("textl")
    var h1Tag = document.querySelector("h1")
    var ulTag = document.querySelector("ul")
    var aTag = document.querySelector("a")
    var btnTag = document.querySelector("button")

    if(e.value == "Big"){
        h1Tag.style.fontSize = "100px"
        ulTag.style.fontSize = "48px";
        aTag.style.fontSize = "48px";
        e.style.fontSize = "48px";
        text.style.fontSize = "48px"
        btnTag.style.height="84px"
        btnTag.style.width="200px"
        btnTag.style.fontSize = "48px";
        
    }
     else if(e.value == "Medium"){
        h1Tag.style.fontSize = "80px"
        ulTag.style.fontSize = "24px"
        aTag.style.fontSize = "24px"
        e.style.fontSize = "24px"
        text.style.fontSize = "24px"
        btnTag.style.height="42px"
        btnTag.style.width="100px"
        btnTag.style.fontSize = "24px";
    }else{
        h1Tag.style.fontSize = "60px"
        ulTag.style.fontSize = "16px"
        aTag.style.fontSize = "16px"
        e.style.fontSize = "16px"
        text.style.fontSize = "16px"
        btnTag.style.height="42px"
        btnTag.style.width="72px"
        btnTag.style.fontSize = "16px";
    }
}
function darkMode(){
    mainTag = document.querySelector("body")
    mainTag.style.backgroundColor = "rgb(50, 50, 46)"
    var text =document.getElementById("textl")
    text.style.backgroundColor="rgb(217, 217, 217)"
}