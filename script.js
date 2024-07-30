let isOK = prompt("ça va ou pas ? répondre par oui ou non");

if ((isOK == "oui") || (isOK == "OUI") || (isOK == "Oui"))
{
	console.log("l'utilisatrice va bien");
}
else if ((isOK== "non") || (isOK =="NON") || (isOK == "Non"))
{
	console.log("l'utilisatrice va mal");
}
else
{
	console.log("l'utilisatrice ne respecte pas la question")
}