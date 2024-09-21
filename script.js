function buttonOnClick(){
    var input = document.getElementById("inputBox").value;
    var output = "";
    var type = "none";

    input.split("\n").forEach(function(t){
        if(t[0] == '#') type = "bold";
        else if(t[0] == '`') type = "code";

        if(type == "none"){
            output += t;
            output += "</br>";
        }else if(type == "bold"){
            output += "<h3>";
            output += t.replace("# ", "");
            output += "</h3>";
            type = "none";
        }else if(type == "code"){
            output += "<div class=div-pre>";
            output += t.replace("```", "").replace("```", "");
            output += "</div>";
            type = "none"
        }
    });
    document.getElementById("mainContent").innerHTML = output;
}

function addColor(){
    var textArea = document.getElementById("inputBox");
    const text = textArea.value;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const newInput = text.substring(0, start) + "<span style=\"color: red;\">" + text.substring(start, end) + "</span>" + text.substring(end, text.length);
    textArea.value = newInput;
}