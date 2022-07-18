// 1. In ra so chan trong khoang tu 0 den 10
// 2. In ra so nguyen to trong khoang tu 0 den 50





function myFunction() {
    var text = '';

    // for (let i = 0; i < 5; i++) {
    //     text += "The number is " + i + "<br>";
    // }

    // var person = { fname: "John", lname: "Doe", age: 25 };

    // var text = "";
    // var x;
    // for (x in person) {
    //     text += person[x];
    // }

    // vong 1: x = fname => person[fname] = John
    // vong 2: x = lname => person[lname] = Doe
    // vong 3: x = age => person[age] = 25

    let i = 0;

    // while (i > 10) {
    //     text += "The number is " + i + "<br>";
    //     i++;
    // }

    // do {
    //     text += "The number is " + i + "<br>";
    //     i++;
    // } while (i > 10);

    var cars = ['BMW', 'Volvo', 'Mini'];
    var students = [
        ['Nguyen Van A', 'RJ2206', 10],
        ['Nguyen Van B', 'RJ2206', 9],
    ];
    var x;

    var text = '<ul>';

    for (x of cars) {
        text += "<li>" + x + "</li>";
    }

    text += "</ul>";




    document.getElementById('demo').innerHTML = text;

    // var x = 4;
    // var y = 5;
    // var Y = 7;
    // var z = x + y;

    // console.log(x);
    // console.log(y);
    // console.log(z);

    // var Name = 'Huy';
    // var name = 'Huy';

    // var className = 'RJ2206';

}

// Uyen, Dung, Tien
