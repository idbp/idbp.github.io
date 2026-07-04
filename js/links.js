var website = ""; var link = "";
function funclinks(){
link += "<li><a href='" + website + "index.html'>الصفحة الرئيسية</a></li>";
link += "<li><a href='" + website + "#download'>تجريبي</a></li>";
link += "<li><a href='" + website + "contact.html'>تواصل</a></li>";
document.getElementById("links").innerHTML=link;
}