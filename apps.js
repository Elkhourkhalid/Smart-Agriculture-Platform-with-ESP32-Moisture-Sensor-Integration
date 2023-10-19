/*var bttn = document.getElementById("bttn");
bttn.addEventListener("click" ,function(){
    alert("Hallo Word")
})
bttn.onclick =function(){
    alert("hhhhh")
}*/
var c1 =document.getElementById("cc1") ;
/*var  p="<p> Fahym Abd Elfattah</p>";

c1.insertAdjacentHTML("afterbegin",p);*/



var p1 = document.createElement("h3");
var tex1 = document.createTextNode("Welcome to the my firset page");
p1.appendChild(tex1);
c1.appendChild(p1);
c1.insertAdjacentElement("beforebegin",p1)