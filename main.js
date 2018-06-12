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

var acc = document.getElementsByClassName("shwans");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.innerHTML = "Hide Answer";
        var txt = this.nextElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
	        this.innerHTML = "Show Answer";
        } else {
            txt.style.display = "block";
        }
    });
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
const DOB = calculateAge();
function calculateAge(){
    age = 25;
    return age;
}
document.querySelector("#ans6").innerHTML = DOB;
var vishakha = "Name is Vishakha";
document.getElementById("ansdiv").innerHTML = vishakha;
document.querySelector("#clickme").addEventListener("click",function(){
	var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("ansdiv2").innerHTML =
        "Hello " + person + "! Wassup dudes &#9786;";
    }
});

// Assignment 2
var counter = 0;
counter++;
++counter;
console.log( counter );

var n = 2;
n *= 3 + 5;
console.log( n );

var a = 1, b = 1; 
var c = ++a; 
var d = b++;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var m = 2;
var o = 1 + (m *= 2);
console.log(o);

var num1 = 5;
var num2 = 10;
var num3 = 3;
var num4 = 1;
var greater;
var greatest;
var highest;
function greatestof4(){
    if (num1 > num2){
        greater = num1;
    }else {
        greater = num2;
    }

    if(greater > num3){
        greatest  = greater;
    }else{
        greatest = num3;
    }

    if(greatest > num4){
        highest  = greatest;
    }else{
        highest = num4;
    }
    return highest;
}
greattestNumber = greatestof4();
console.log(greattestNumber);    
document.querySelector("#ans7").innerHTML = greattestNumber;


//  if (a + b < 4) { result = 'Below'; } else { result = 'Over'; }

var a1 = 2;
var b1 = 3;
var a2 = 1;
var b2 = 1;
function grnum() {
  return (a1 + b1 < 4 ? "Below" : "Over");
}
// console.log(grnum());
document.querySelector("#ans8").innerHTML = grnum();

document.querySelector("#ans9").addEventListener("click", function(){

var a = +prompt('a?', '');
switch(a) {
    case 0:
        alert( 0 ); 
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        alert("number out of range")
}
});
var teenage = 19;
var inputage = document.querySelector("#agein");
document.querySelector("#submit").addEventListener("click", function(){
    if(isNaN(inputage.value) == false && inputage.value <= teenage ){
        alert("is a teenager");
    }
    else{
        alert("not a teenager")
    }
});

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Weekend";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Weekend";
}


var color;
var time = new Date().getHours();
if (time < 10) {
    color = "yellow"
} else if (time < 20) {
    color = "blue";
} else {
    color = "black";
}
document.body.style.backgroundColor = color;
