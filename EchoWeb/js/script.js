function changeText(){
    var e = document.getElementById("tSize")
    var text =document.getElementById("textl")
    var h1Tag = document.querySelector("h1")
    var ulTag = document.querySelector("ul")
    var aTag = document.querySelector("a")
    var btnTag = document.getElementById("btn")
    var darkTag = document.getElementById("dark")
    var lightTag = document.getElementById("light")
    var textoption3 = document.getElementById("text2")
    var option3Box = document.getElementById("tFont")
    var btn2Tag = document.getElementById("btn2")
    var textoption4 = document.getElementById("colorBlindText")
    var option4Box = document.getElementById("tcolours")
    var btn3Tag = document.getElementById("btn3")
    var supportTag = document.getElementById("supportbtn")
    
    


    if(e.value == "Big"){
        h1Tag.style.fontSize = "100px"
        ulTag.style.fontSize = "48px";
        aTag.style.fontSize = "48px";
        e.style.fontSize = "48px";
        option3Box.style.fontSize = "48px";
        option4Box.style.fontSize = "48px";
        text.style.fontSize = "48px"
        textoption3.style.fontSize = "48px"
        textoption4.style.fontSize = "48px";
        btnTag.style.height="300px"
        btnTag.style.width="200px"
        btnTag.style.fontSize = "48px";
        darkTag.style.height="300px"
        darkTag.style.width="200px"
        darkTag.style.fontSize = "48px";
        lightTag.style.height="300px"
        lightTag.style.width="200px"
        lightTag.style.fontSize = "48px";
        btn2Tag.style.height="300px"
        btn2Tag.style.width="200px"
        btn2Tag.style.fontSize = "48px";
        btn3Tag.style.height="300px"
        btn3Tag.style.width="200px"
        btn3Tag.style.fontSize = "48px";
        supportTag.style.height="250px"
        supportTag.style.width="550px"
        supportTag.style.fontSize = "78px";
        
    }
     else if(e.value == "Medium"){
        h1Tag.style.fontSize = "80px"
        ulTag.style.fontSize = "24px"
        aTag.style.fontSize = "24px"
        e.style.fontSize = "24px"
        textoption4.style.fontSize = "24px"
        option3Box.style.fontSize = "24px"
        option4Box.style.fontSize = "24px"
        text.style.fontSize = "24px"
        textoption3.style.fontSize = "24px"
        btnTag.style.height="112px"
        btnTag.style.width="100px"
        btnTag.style.fontSize = "24px";
        darkTag.style.height="84px"
        darkTag.style.width="100px"
        darkTag.style.fontSize = "24px";
        lightTag.style.height="84px"
        lightTag.style.width="100px"
        lightTag.style.fontSize = "24px";
        btn2Tag.style.height="84px"
        btn2Tag.style.width="100px"
        btn2Tag.style.fontSize = "24px";
        btn3Tag.style.height="84px"
        btn3Tag.style.width="100px"
        btn3Tag.style.fontSize = "24px";
        supportTag.style.height="152px"
        supportTag.style.width="300px"
        supportTag.style.fontSize = "44px";
        
    }else{
        h1Tag.style.fontSize = "60px"
        ulTag.style.fontSize = "16px"
        aTag.style.fontSize = "16px"
        e.style.fontSize = "16px"
        textoption4.style.fontSize = "16px"
        option3Box.style.fontSize = "16px"
        option4Box.style.fontSize = "16px"
        text.style.fontSize = "16px"
        textoption3.style.fontSize = "16px"
        btnTag.style.height="96px"
        btnTag.style.width="72px"
        btnTag.style.fontSize = "16px";
        darkTag.style.height="56px"
        darkTag.style.width="72px"
        darkTag.style.fontSize = "16px";
        lightTag.style.height="56px"
        lightTag.style.width="72px"
        lightTag.style.fontSize = "16px";
        btn2Tag.style.height="56px"
        btn2Tag.style.width="72px"
        btn2Tag.style.fontSize = "16px";
        btn3Tag.style.height="56px"
        btn3Tag.style.width="72px"
        btn3Tag.style.fontSize = "16px";
        supportTag.style.height="90px"
        supportTag.style.width="200px"
        supportTag.style.fontSize = "24px";
    }
}

function darkMode(){
    mainTag = document.querySelector("body")
    var textoption4 = document.getElementById("colorBlindText")
    var textoption3 = document.getElementById("text2")
    mainTag.style.backgroundColor = "rgb(50, 50, 46)"
    var text =document.getElementById("textl")
    text.style.backgroundColor="rgb(217, 217, 217)"
    var hightlight = document.querySelector(".navitemActive")
    var textColour = document.getElementById("color")
    hightlight.style.backgroundColor="rgb(56, 16, 59)"
    textColour.style.color="rgb(217, 144, 223)"
}

function lightMode(){
    var textoption4 = document.getElementById("colorBlindText")
    var textoption3 = document.getElementById("text2")
    mainTag = document.querySelector("body")
    mainTag.style.backgroundColor = "rgb(255, 255, 255)"
    var text =document.getElementById("textl")
    text.style.backgroundColor="rgb(255, 255, 255)"
    textoption4.style.backgroundColor="rgb(255, 255, 255)"
    textoption3.style.backgroundColor="rgb(255, 255, 255)"
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
    var supportTag = document.getElementById("supportbtn")

    if(e.value == "ComicSans"){
        h1Tag.style.fontFamily = "Cursive";
        ulTag.style.fontFamily = "Cursive";
        aTag.style.fontFamily =  "Cursive";
        e.style.fontFamily ="Cursive";
        text.style.fontFamily = "Cursive";
        btnTag.style.fontFamily = "Cursive";
        supportTag.style.fontFamily = "Cursive";
        
    }

    if(e.value == "Courier"){
        h1Tag.style.fontFamily = "Courier";
        ulTag.style.fontFamily = "Courier";
        aTag.style.fontFamily =  "Courier";
        e.style.fontFamily ="Courier";
        text.style.fontFamily = "Courier";
        btnTag.style.fontFamily = "Courier";
        supportTag.style.fontFamily = "Courier";
        
    }
    if(e.value == "Default"){
        h1Tag.style.fontFamily = "Arial";
        ulTag.style.fontFamily = "Arial";
        aTag.style.fontFamily =  "Arial";
        e.style.fontFamily ="Arial";
        text.style.fontFamily = "Arial";
        btnTag.style.fontFamily = "Arial";
        supportTag.style.fontFamily = "Arial";
        
    }

}
function ColorBlind(){
    var e = document.getElementById("tcolours")
    var headerTag = document.getElementById("head1")
    var supportTag = document.getElementById("supportbtn")
    
    if(e.value == "Deuteranopia"){
        headerTag.style.backgroundColor="rgb(102, 138, 255)" 
        headerTag.style.color="Black"
        supportTag.style.backgroundColor="rgb(102, 138, 255)" 
        supportTag.style.color="Black"
    }
    if(e.value == "Protanopia"){
        headerTag.style.backgroundColor="#0800FF"
        headerTag.style.color="Black" 
        supportTag.style.backgroundColor="#0800FF"
        supportTag.style.color="Black" 
    }
    if(e.value == "Tritanopia"){
        headerTag.style.backgroundColor="red" 
        headerTag.style.color="Black"
        supportTag.style.backgroundColor="red"
        supportTag.style.color="Black"  
    }
    if(e.value == "Default"){
        headerTag.style.backgroundColor="#dab5dd";
        headerTag.style.color ="rgb(56, 16, 59)";
        supportTag.style.backgroundColor="#dab5dd";
        supportTag.style.color ="rgb(56, 16, 59)";
    }

}