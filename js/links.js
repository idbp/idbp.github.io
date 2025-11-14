var website = ""; var link = ""; var social="Copyright © 2025 AA Dev. All rights reserved. "; var st
var loca = window.location.pathname;
var wpath = loca.substring(0, loca.lastIndexOf("/"));
var dName = wpath.substring(wpath.lastIndexOf(".")+1);
if(dName!=="io"){var website = "../";}
function funclinks(){
link += "<li><a href='" + website + "index.html'>الصفحة الرئيسية</a></li>";

link += "<li><a href='" + website + "reqactive.html'>طلب رمز تفعيل</a></li>";

document.getElementById("links").innerHTML=link;

//social += "<a href='https://codepen.io/'><i class='fa fa-codepen'></i></a>";
//social += "<a href='https://www.linkedin.com/in/'><i class='fa fa-linkedin-square'></i></a>";
//social += "<a href='https://www.facebook.com/'><i class='fa fa-facebook-square'></i></a>";
//social += "<a href=''><i class='fa fa-twitter'></i></a>";
//social += "<a href='https://www.youtube.com/'><i class='fa fa-youtube'></i></a>";
//social += "<a href=''><i class='fa fa-whatsapp'></i></a>";
//social += "<a href='https://www.instagram.com/'><i class='fa fa-instagram'></i></a>";
//social += "<a href='#.html'><i class='fa fa-exclamation'></i></a>";
//social += "<a href='contact.html'><i class='fa fa-envelope'></i></a>";
//social += "<a href='contact.html'><i class='fa fa-question'></i></a>";
social += "<a href='contact.html'><i class='fa fa-lightbulb-o'></i></a> ";
document.getElementById("sociallinks").innerHTML=social;
}