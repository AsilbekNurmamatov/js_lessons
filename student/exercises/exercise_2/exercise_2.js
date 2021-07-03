///////////// my code exercise-21

function check(str) {
    if (str.substring(0, 2) == "Py") {
        return (str);
    } else {
        return ("Py" + str);
    }
}
console.log(check('Python'));
console.log(check('python'));
console.log(check('thon'));

///////////// w3resource code exercise-21

function string_check(str1) {
    if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') {
        return str1;
    }
    return "py" + str1;
}

console.log(string_check("Python"));
console.log(string_check("python"));
console.log(string_check("thon"));

///////////// my code exercise-22

var str = "Hello World";
str = str.slice(0, 3) + str.slice(4);
console.log(str)

///////////// w3resource code exercise-22

function remove_character(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    return (part1 + part2);
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));



///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21
///////////// my code exercise-21
///////////// w3resource code exercise-21


///////////// my code exercise-40

function checkNumber(a, b) {
    if (a == 8 || b == 8) {
        console.log(true);
    } else if (a + b == 8) {
        console.log(true);
    } else if (a - b == 8 || b - a == 8) {
        console.log(true);
    } else {
        console.log(false);
    }
}

checkNumber(2, 6)
checkNumber(4, 2)


///////////// w3resource code exercise-40

function check8(x, y) {
    if (x == 8 || y == 8) {
        return true;
    }

    if (x + y == 8 || Math.abs(x - y) == 8) {
        return true;
    }

    return false;
}

console.log(check8(7, 8));
console.log(check8(16, 8));
console.log(check8(24, 32));