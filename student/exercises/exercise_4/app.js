//////////////   my  code  23-exercise

// var textNode = childNodes[0];
// var text = textNode.data;

// function text1(str) {
//     text = text[text.length - 1] + text.substring(0, text.length - 1);
//     textNode.data = text;
// }
// console.log(text1(asil));

// function(str) {}

//////////////   w3resource code  23-exercise

function first_last(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
}
console.log(first_last("a"));
console.log(first_last("ab"));
console.log(first_last("asil"));

//////////////   my  code  24-exercise

function front_back(str) {
    first = str.substring(0, 1);
    return first + str + first;
}
console.log(front_back("string"));
//////////////   my  code  25-exercise

function exercise_25(a) {
    if (a % 3 == 0 || a % 7 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(exercise_25(21));
console.log(exercise_25(29));
//////////////   my  code  26-exercise
function front_back3(str) {
    if (str.length <= 3) {
        str_len = 3;

        back = str.substring(str.length - 3);
        return back + str + back;
    } else return false;
}
console.log(front_back3("abc"));
console.log(front_back3("ab"));
console.log(front_back3("abcd"));

//////////////   my  code   27-exercise

function start_spec_str(str) {
    start = str.substring(0, 4);
    if (start == "Java") {
        return true;
    } else {
        return false;
    }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));

//////////////   w3resource code  27-exercise
function start_spec_str(str) {
    if (str.length < 4) {
        return false;
    }
    front = str.substring(0, 4);
    if (front == "Java") {
        return true;
    } else {
        return false;
    }
}

console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python"));

//////////////   my  code  28-exercise

function check_numbers(x, y) {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
        return true;
    } else {
        return false;
    }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));

console.log("sdfsdfsdfsdfsdfsdfsdfsd");

//////////////   my  code  29-exercise

function check_three_nums(x, y, z) {
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(check_three_nums(50, 90, 99));
console.log(check_three_nums(5, 9, 199));
console.log(check_three_nums(65, 89, 199));
console.log(check_three_nums(65, 9, 199));

//////////////   my  code  30-exercise

const removeScript = (str) => {
    let reg = /script/i;
    if (str.search(reg) === 4) return str.replace(reg, "");
    return str;
};

console.log(removeScript("JavaScript"));

//////////////   w3resource code  27-exercise

function check_script(str) {
    if (str.length < 6) {
        return str;
    }
    let result_str = str;
    if (str.substring(10, 4) == "Script") {
        result_str = str.substring(0, 4) + str.substring(10, str.length);
    }
    return result_str;
}

console.log(check_script("JavaScript"));
console.log(check_script("CoffeeScript"));

//////////////   my  code  31-exercise

function max(a, b, c) {
    max_number = 0;
    if (a > b) {
        max_number = a;
    } else {
        max_number = b;
    }
    if (c > max_number) {
        max_number = c;
    }
    return max_number;
}
console.log(max(6, 12, 1));

//////////////   my  code  32-exercise
//////////////   w3resource code  32-exercise

function near_100(x, y) {
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);

        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    } else return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));
