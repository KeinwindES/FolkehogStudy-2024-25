var poeng = 0;

function check() {
    // q = question
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q5.value;

    if (q1 == "A") {
        poeng++;
    }

    if (q2 == "A") {
        poeng++;
    }

    if (q3 == "C") {
        poeng++;
    }

    if (q4 == "D") {
        poeng++;
    }

    if (q5 == "B") {
        poeng++;
    }

    if (q6 == "C") {
        poeng++;
    }

    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("number_correct").innerHTML = "You got " + poeng + " correct.";

    if (poeng == 6) {
        document.getElementById("number_correct").innerHTML = "You got all correct. You are a Wizard";
    }  

    if (poeng == 5) {
        document.getElementById("number_correct").innerHTML = "You got 5 correct. You are an elf";
    }

    if (poeng == 4) {
        document.getElementById("number_correct").innerHTML = "You got 4 correct. You are a nazgul";
    }

    if (poeng == 3) {
        document.getElementById("number_correct").innerHTML = "You got 3 correct. You are a dwarf";
    }

    if (poeng == 2) {
        document.getElementById("number_correct").innerHTML = "You got 2 correct. You are a hobbit";
    }

    if (poeng == 1) {
        document.getElementById("number_correct").innerHTML = "You got 1 correct. You are a gollum";
    }
}