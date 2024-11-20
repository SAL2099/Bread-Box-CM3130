function changeText(){
    var e = document.getElementById("tSize")
    var text =document.getElementById("textl")
    var h1Tag = document.querySelector("h1")
    var ulTag = document.querySelector("ul")
    var aTag = document.querySelector("a")
    var btnTag = document.getElementById("btn")
    
    


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
    var hightlight = document.querySelector(".navitemActive")
    var textColour = document.getElementById("color")
    hightlight.style.backgroundColor="rgb(56, 16, 59)"
    textColour.style.color="rgb(217, 144, 223)"
}

function lightMode(){
    mainTag = document.querySelector("body")
    mainTag.style.backgroundColor = "rgb(255, 255, 255)"
    var text =document.getElementById("textl")
    text.style.backgroundColor="rgb(255, 255, 255)"
    var hightlight = document.querySelector(".navitemActive")
    var textColour = document.getElementById("color")
    hightlight.style.backgroundColor="rgb(52, 53, 54)"
    textColour.style.color="white"
}

function changeFont(){

    var e = document.getElementById("tFont")
    var text =document.getElementById("textl")
    var h1Tag = document.querySelector("h1")
    var ulTag = document.querySelector("ul")
    var aTag = document.querySelector("a")
    var btnTag = document.querySelector("button")

    if(e.value == "ComicSans"){
        h1Tag.style.fontFamily = "Cursive";
        ulTag.style.fontFamily = "Cursive";
        aTag.style.fontFamily =  "Cursive";
        e.style.fontFamily ="Cursive";
        text.style.fontFamily = "Cursive";
        btnTag.style.fontFamily = "Cursive";
        
    }

    if(e.value == "Courier"){
        h1Tag.style.fontFamily = "Courier";
        ulTag.style.fontFamily = "Courier";
        aTag.style.fontFamily =  "Courier";
        e.style.fontFamily ="Courier";
        text.style.fontFamily = "Courier";
        btnTag.style.fontFamily = "Courier";
        
    }
    if(e.value == "Default"){
        h1Tag.style.fontFamily = "Arial";
        ulTag.style.fontFamily = "Arial";
        aTag.style.fontFamily =  "Arial";
        e.style.fontFamily ="Arial";
        text.style.fontFamily = "Arial";
        btnTag.style.fontFamily = "Arial";
        
    }
}