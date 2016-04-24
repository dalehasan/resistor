$(document).ready(function(){
/* Qunit test for testing purpose  */
    test("basics", function() {
        equal(myFunctionTest(1,1,2,1), true);
        equal(myFunctionTest(1,1,1,1), true);
        equal(myFunctionTest(1,1,2,1), false);
        equal(myFunctionTest(), false);
        equal(myFunctionTest(), null);
        equal(myFunctionTest(1,"a",1,1), false);
        equal(myFunctionTest(1,"a",1,1), true);
    });

/* myFunctionTest for testing purpose */
function myFunctionTest(band1, band2, band3,band4){
    var radioColorValue= document.querySelector('input[name = "radioBtn"]:checked').value;
    var radioColorValue2= document.querySelector('input[name = "radioBtn2"]:checked').value;
    var radioColorValue3= document.querySelector('input[name = "radioBtn3"]:checked').value;
    var radioColorValue4= document.querySelector('input[name = "radioBtn4"]:checked').value;
        if(band1 == radioColorValue && band2 == radioColorValue2 && band3 == radioColorValue3 && band4 == radioColorValue4 )
        {
        return true;
        }
        else if(band1 == null || band2 == null  || band3 == null  || band4 == null )
        {
        return null;
        }
        else if(isNaN(band1)==true || isNaN(band1)==true || isNaN(band1)==true || isNaN(band1)==true)
        {
        return false;
        }
        else 
        {
        return false;
        }
        }
});







