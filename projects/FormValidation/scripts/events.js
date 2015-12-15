//form element events


profile.firstName.addEventListener("change", function(){
    document.getElementById("fnameAlert").setAttribute("style", "visibility: hidden;");
});

profile.lastName.addEventListener("change", function(){
    document.getElementById("lnameAlert").setAttribute("style", "visibility: hidden;");
});

profile.address1.addEventListener("change", function(){
    document.getElementById("address1Alert").setAttribute("style", "visibility: hidden;");
});

profile.address2.addEventListener("change", function(){
    document.getElementById("address2Alert").setAttribute("style", "visibility: hidden;");
});

profile.city.addEventListener("change", function(){
    document.getElementById("cityAlert").setAttribute("style", "visibility: hidden;");
});

profile.province.addEventListener("change", function(){
    document.getElementById("provinceAlert").setAttribute("style", "visibility: hidden;");
});

profile.country.addEventListener("change", function(){
    document.getElementById("countryAlert").setAttribute("style", "visibility: hidden;");
});