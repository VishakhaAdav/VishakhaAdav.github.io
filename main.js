// assignments tab
function toggle_visibility(evt, tabid) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabid).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
var divs = ["tab1", "tab2", "tab3", "tab4"];
var visibleDivId = null;
function divVisibility(divId) {
	if(visibleDivId === divId) {
		visibleDivId = null;
	} else {
		visibleDivId = divId;
	}
	hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
	var i, divId, div;
	for(i = 0; i < divs.length; i++) {
		divId = divs[i];
		div = document.getElementById(divId);
		if(visibleDivId === divId) {
			div.style.display = "block";
			div.classList.add("fadeIn");
		} else {
			div.style.display = "none";
		}
	}
}

// Assignment 1
var carName = "Honda City";
document.getElementById("ans1").innerHTML = carName;
var num = 150;
document.querySelector("#ans2").innerHTML = num;
var x = 5, y = 10;
document.querySelector("#ans3").innerHTML = x + y;
var z = x + y;
document.querySelector("#ans4").innerHTML = z;
var firstName = "John", lastName = "Doe", age = 35;
document.querySelector("#ans5").innerHTML = firstName + " " + lastName + " " +  "age:" + age;
var DOB = '19800810';
var year = Number(DOB.substr(0, 4));
var month = Number(DOB.substr(4, 2)) - 1;
var day = Number(DOB.substr(6, 2));
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
}
alert(age);
var vishakha = "Name is Vishakha";
document.getElementById("ansdiv").innerHTML = vishakha;

document.querySelector("#clickme").addEventListener("click",function(){
	alert(vishakha);
});