function full_Sentence() {
    var part_1 ="I have ";
    var part_2 ="made this ";
    var part_3 ="into a full ";
    var part_4 ="sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}


function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML= Section;
}

function upperCase_Method() {
    let text = document.getElementById("upperCase").innerHTML;
    document.getElementById("upperCase").innerHTML = text.toUpperCase();
}

function locate_Method() {
    let text = "Please locate where 'locate' occurs!";
    let index = text.search("locate");
    document.getElementById("search").innerHTML = index;
}

function string_Method() {
    var X = 182;
    document.getElementById("Number_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12398.301234864385;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function toFixed_Method() {
    let num = 5.52345;
    let n = num.toFixed();
    document.getElementById("toFixed").innerHTML = n;
}

function valueOf_Method() {
    let num = 15;
    let n = num.valueOf();
    document.getElementById("valueOf").innerHTML = n;
}