function setbackground(){
    var postbackground = document.getElementById("post-bacground");
    postbackground.style.backgroundImage = 'url(' + event.target.src + ')'
    postbackground.style.background = "no-repaet";
}

function changeColor(){
    var textarea = document.getElementById("txt");
    textarea.style.color = event.target.value;
}

function changestyle(){
    var textarea = document.getElementById("txt");
    var type = event.target.innerText;
    if(type === "B"){
        if(textarea.style.fontWeight === "bold"){
            textarea.style.fontWeight = "normal"
        }
        else{
            textarea.style.fontWeight = "bold"
        }
    }

    if(type === "I"){
        if(textarea.style.fontStyle === "italic"){
            textarea.style.fontStyle = "normal"
        }
        else{
            textarea.style.fontStyle = "italic"
        }
    }

    if(type === "U"){
        if(textarea.style.textDecoration === "underline"){
            textarea.style.textDecoration = "none"
        }
        else{
            textarea.style.textDecoration = "underline"
        }
    }
    console.log(event.target.innerText)
}

function changefontSize(){
    var textarea = document.getElementById("txt");
    textarea.style.fontSize = event.target.value + "px"
    console.log(event.target.value)
}

function fontspace(){
    var textarea = document.getElementById("txt");
    // var fontvalue = document.getElementById("L");
    // var fontvalue = document.getElementById("M");
    // var fontvalue = document.getElementById("R");
    if(document.getElementById("L")){
        textarea.style.textAlign = "left"
    }
    if(document.getElementById("M")){
        textarea.style.textAlign = "center"
    }
    if(fdocument.getElementById("R")){
        textarea.style.textAlign = "right"
    }
}

function createpost(){
    var createpost = document.getElementById("items");
    var createpost1 = document.getElementById("items1");
    var txtarea = document.getElementById("txt");
    txtarea.style.display = "block";
    createpost.style.display = "none";
    createpost1.style.display = "none";
}

function pagereset(){
    var createpost = document.getElementById("items");
    var createpost1 = document.getElementById("items1");
    var txtarea = document.getElementById("txt");
    txtarea.style.display = "block";
    createpost.style.display = "contents";
    createpost1.style.display = "contents"; 
}