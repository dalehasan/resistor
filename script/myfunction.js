/* myFunction */
function myFunction(){
/* variables initiation */
var colors=["black","brown","red","orange","yellow","green","blue","violet","grey","white"]; 
var colorsResistance=["brown","red","green","gold","silver"];
var radioColorValue= document.querySelector('input[name = "radioBtn"]:checked').value;
var radioColorValue2= document.querySelector('input[name = "radioBtn2"]:checked').value;
var radioColorValue3= document.querySelector('input[name = "radioBtn3"]:checked').value;
var radioColorValue4= document.querySelector('input[name = "radioBtn4"]:checked').value;
var result= (radioColorValue+  radioColorValue2) * Math.pow(10,radioColorValue3) ;

/* this is to validate the result */
try {
	if(result == "" && result != "0") throw "empty";
	if(result == 'undefined') throw "undefined";
	if(isNaN(result)) throw "not a number";
}
catch(err){
    alert("Error: " + err);
}
finally{
	document.getElementById("result").innerHTML=result + " ohms with +/- " + radioColorValue4 + "% resistance." ;
	/* this is to show the colors on the ohm picture*/
	document.getElementById("band1").style.backgroundColor= colors[radioColorValue];
	document.getElementById("band2").style.backgroundColor= colors[radioColorValue2];
	document.getElementById("band3").style.backgroundColor= colors[radioColorValue3];
			if(radioColorValue4 == 1)
				{
				document.getElementById("band4").style.backgroundColor= "brown";
				}
				else if (radioColorValue4 == 2)
				{
				document.getElementById("band4").style.backgroundColor= "red";
				}
				else if (radioColorValue4 == 0.5)
				{
				document.getElementById("band4").style.backgroundColor= "green";
				}
				else if (radioColorValue4 == 5)
				{
				document.getElementById("band4").style.backgroundColor= "gold";
				}
				else if (radioColorValue4 == 10)
				{
				document.getElementById("band4").style.backgroundColor= "silver";
				}
				else
				{
				alert ("Color is not correct for this band!");
				}
	  }
}
