function detail(){
    alert("Hello everyone");
    document.write("welcome Guys: </br>")
    var names = ["Deepak","Tejender","Dippi"];
    for(i=0;i<names.length;i++)
    {
        document.writeln(names[i]+"</br>");
    }
    
    var b= "Atul";
    var c= b.concat();
    document.writeln(c +"</br>");
}