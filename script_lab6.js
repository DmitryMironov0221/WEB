function ex4_object() {
    var key = document.getElementById("key").value
    var k = key.split(',')
    var value = document.getElementById("value").value
    var v = value.split(",")
    var object = {};
    var output = "";
    for (var i = 0; i < k.length; i++) {
        object[k[i]] = v[i]
        console.log(object)
    }
    for (var t in object) {
        var el = "";
        el += t + ":" + object[t];
        output += el + "\n";
    }
    document.getElementById("res4_lab6").innerText = output
}

function ex7_object() {
    var key = document.getElementById("k").value
    var k = key.split(',')
    var value = document.getElementById("val").value
    var v = value.split(",")
    var object = {};
    var output = "";
    for (var i = 0; i < k.length; i++) {
        object[k[i]] = v[i]
        console.log(object)
    }
    for (var t in object) {
        var el = "";
        el += t + ":" + object[t];
        output += el + "\n";

    }
    document.getElementById("res7_lab6").innerText = output
}

//понедельник, вторник, среда, четверг, пятница, суббота, воскресенье
//Будний день, Будний день, Будний день, Будний день, Будний день, Выходной, Выходной

function ex4_1_event() {
    var btn = document.getElementById("myButton");
    if (btn.value == "press") {
        btn.value = "not press";
        btn.innerHTML = "not press";
        btn.addEventListener('click', function onClick(event) {
            event.target.style.color = 'yellow';
        });
    }
    else {
        btn.value = "press";
        btn.innerHTML = "press";
        btn.addEventListener('click', function onClick(event) {
            event.target.style.color = 'black';
        });
        }

}

function ex10_event(){
    const x = document.getElementById('txt1');
    const y = document.getElementById('txt2');
    y.value = x.value;
    x.value = "";
}