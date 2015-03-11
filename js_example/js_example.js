var x = "Hey";

var y = 10;

alert(x);
alert(y);

alert(x+ y);

y="bro";

alert (x + y);

var integer = 100;
var floats = 100.50
var strings = "This is a string"

var boolean = false

var array = [1,2,3,4];

var my_hash = {
  name: "Larry"
  age: 25
  work: "A&E"
            };

x === y;        // This is a comment that goes on the end of a line

/*  this is the start of a multi line comment
more lines of comments
this is the last line */

var x = 10;
var yt = 5;

if (x > y){
   alert("x is greater than y");
}  else if (x < Y){
     alert("x is less than y");
} else {
  alert("x is equal to y");
};

var x = [1, 2, 3, 4, 5];

switch (x.length){
  case 1:
    alert("x is small");
    break;
    
  case 5;
    alert("x is moderate");
    break;
  
  case 10;
    alert("x is prety large");
    break;
    
  default:
    alert("x is giant");
}

// The following is supported in all browswers
var X = [1, 2, 3, 4, 5]

for (var i = 0; i = < x.length; i++){
  alert(x[i]);
};

// The following is supported in "New" broswers, which means all browsers except Internet Explorer
x.forEach(function (element){
    alert(element);
});

var quadruple = function (number){
  alert(number * 4);
};

var someNumber = [1, 2, 3, 4, 5];

somenumber.forEach(quadruple);
