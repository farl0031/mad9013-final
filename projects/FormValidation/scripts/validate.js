//validate module
var validate = (function()
{
	"use strict";
	
	var validateEmpty = function()	{
										var valid = true;
										if (profile.firstName.value == "")
										{	
											document.getElementById("fnameAlert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("fnameAlert").setAttribute("style", "visibility: hidden;");
										}
										
										if (profile.lastName.value == "")
										{	
											document.getElementById("lnameAlert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("lnameAlert").setAttribute("style", "visibility: hidden;");
										}
										
										
										if (profile.address1.value == "")
										{	
											document.getElementById("address1Alert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("address1Alert").setAttribute("style", "visibility: hidden;");
										}
										
										
										if (profile.address2.value == "")
										{	
											document.getElementById("address2Alert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("address2Alert").setAttribute("style", "visibility: hidden;");
										}
										
										
										if (profile.city.value == "")
										{	
											document.getElementById("cityAlert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("cityAlert").setAttribute("style", "visibility: hidden;");
										}
										
										
										var selectedProvince = profile.province.options[profile.province.selectedIndex].value;
										if (selectedProvince == "")
										{
											document.getElementById("provinceAlert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("provinceAlert").setAttribute("style", "visibility: hidden;");
										}
										
										
										var selectedCountry = profile.country.options[profile.country.selectedIndex].value;
										if (selectedCountry == "")
										{
											document.getElementById("countryAlert").setAttribute("style", "visibility: visible;");
											valid = false;
										}
										else
										{
											document.getElementById("countryAlert").setAttribute("style", "visibility: hidden;");
										}
										
										return valid;
										
									};
	
	
	
	//Public
	var validateProfile = function(){
										var result = validateEmpty();
										if (result)
										{
											alert("Thank You!");
										}
										
										return result;
									};
    
    
	
    return 	{ 
				validateProfile : validateProfile
			};
    
}());


document.getElementById("btnSubmit").addEventListener("submit", function() {validate.validateProfile();});