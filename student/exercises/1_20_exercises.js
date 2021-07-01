var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time : " + hour + prepand + " : " + minute + " : " + second);

// 2-exercise

function print_page() {
    window.print();
}

//    3-exercise

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '-' + dd + '-' + yyyy;
console.log(today);
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
today = dd + '-' + mm + '-' + yyyy;
console.log(today);
today = dd + '/' + mm + '/' + yyyy;
console.log(today);

//    4-exercise


var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3) / 2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);


//    5-exercise

function animate_string(target) {
    var element = document.getElementById(target);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}


//    6-exercise


function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2020));


//    7-exercise

for (var year = 2000; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
    if (d.getDay() === 0)
        console.log("1 yanvar yakshanba  " + year);
}



//    8-exercise

// const num = Math.ceil(Math.random() * 10);
// console.log(num);
// const gnum = prompt('raqam kiriting');
// if (gnum == num)
//     console.log('mos keldi');
// else
//     console.log('mos emas ' + gnum);



//    9-exercise



today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!");



//    10-exercise



function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
//    11-exercise

function cToF(celsius) {
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
cToF(60);
fToC(45);
//    12-exercise


console.log(document.URL);
//    13-exercise


var var_name = 'abcd';
var n = 120;
this[var_name] = n;
console.log(this[var_name])



//    14-exercise

filename = "system.html"
console.log(filename.split('s').pop());
filename = "abc.js"
console.log(filename.split('.').pop());
//    15-exercise


function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32));
console.log(difference(11));



//    16-exercise


function sumTriple(x, y) {
    if (x == y) {
        return 3 * (x + y);
    } else {
        return (x + y);
    }
}
console.log(sumTriple(10, 20));
console.log(sumTriple(10, 10));



//    17-exercise

function diff_num(n) {
    if (n <= 19) {
        return (19 - n);
    } else {
        return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));


//    18-exercise


function test50(x, y) {
    return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50));
console.log(test50(20, 50));
console.log(test50(20, 20));
console.log(test50(20, 30));

console.log("...................................");




//    19-exercise


function testhundred(x) {
    return ((Math.abs(100 - x) <= 20) ||
        (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));

console.log("...................................");


//    20-exercise



function positive_negative(x, y) {
    if ((x < 0 && y > 0) || x > 0 && y < 0) {
        return true;
    } else {
        return false;
    }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));