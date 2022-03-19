function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="Ajay"&&password=="2001")
{
alert("login succesfully");
return false;    
}
else
{
alert("login failed");    
}
}