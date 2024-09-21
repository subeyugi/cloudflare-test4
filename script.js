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
            output += "<h2>";
            output += t.replace("# ", "");
            output += "</h2>";
            output += "</br>";
            type = "none";
        }else if(type == "code"){
            output += "<div class=div-pre>";
            output += t.replace("```", "").replace("```", "");
            output += "</div>";
            type = "none"
        }
    });
    document.querySelector("p").innerHTML = output;
}