function onSub()
{
	var email = document.getElementById("email").value;
	first = document.getElementsByName("fName").value;
	last = document.getElementsByName("lName").value;
	at = "@"
	com = ".com"
	if(email.indexOf(at) == -1)
	{
		alert("Must enter a valid email!");
		return;
	}
	if(email.indexOf(com) == -1)
	{
		alert("Must enter a valid email!");
		return;
	}
	alert("Success you will get your email shortley, or never.");
}