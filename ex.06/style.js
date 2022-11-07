function change(){
    var box = document.getElementById("box");
    var bgcolor = document.getElementById("background").value;
    var txtcolor = document.getElementById("textcolor").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    var size = document.getElementById("size").value;
    var range = document.getElementById("range").value;

    box.style.backgroundColor = bgcolor;
    box.style.color = txtcolor;
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.fontSize = size + "px";
    box.style.borderRadius = range + "px";
}
