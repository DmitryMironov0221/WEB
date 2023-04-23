function ex13lab4(min = 1, max = 100) {
// min and max included
    var num1 = document.getElementById("inp").value
    var num2 = document.getElementById("inp12").value
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("res1_2lab4").innerText = "Введено некорректное значение";
    } else {
        document.getElementById("res1_2lab4").innerText = "Сгенирированное число:" + (Math.floor(Math.random() * (Math.max(num1, num2) - Math.min(num1, num2) + 1)) + Math.min(num1, num2));
    }
}


function ex26lab4() {
    var mes=" ";
    for (var f = 1; f<=9;f++) {
        var x = " ";
        for(var h = 1;h<=f;h++) {
            x += f
        }
        mes += x + '\n';
    }

    document.getElementById("res2lab4").innerText = mes;
}

function ex4lab4() {
    document.getElementById("add4-2").innerHTML = "";
    document.getElementById("ans4").innerText = "";
    document.getElementById("add4").innerText = "";
    var text_arr = document.getElementById("inp4").value;
    var arr1 = text_arr.split(",");

    var fl2 = true;
    for (let i = 0; i < arr1.length; i++) {
        var ae1 = parseInt(arr1[i]);
        if (isNaN(ae1)) {
            document.getElementById("add4-2").innerText = "Введено некорректное значение";
            fl2 = false;
            break
        }
    }
    if (fl2 == true) {
        document.getElementById("add4").innerText = "Получившийся массив: " + arr1;

        var comp = arr1[0];
        var fl1 = false;
        for (let i = 1; i < arr1.length; i++) {
            if (arr1[i] == comp) {
                document.getElementById("ans4").innerText = "Answer: Yes";
                fl1 = true;
                break;
            }
            comp = arr1[i];
        }
        if (fl1 = false) {
            document.getElementById("ans4").innerText = " Answer:  No";
        }
    }
}

function ex6lab4() {
    var arr1 = []
    var arr = document.getElementById("input2").value;
    var arr2 = arr.split(",")
    for (let e = 0; e < arr2.length; e++) {
        if (isNaN(arr[e])) {
            document.getElementById("res3").innerText = "Введено некорректное значение";
            break
        }
    }
    for (var j = 2; j <= 100; j++) {
        for (let i = 0; i <= arr2.length; i++) {
            if (arr2.length == 0) {
                break
            }
            var num = arr2[i];
            var arr3 = [];
            for (let t = 2; t <= num; t++) {
                if (num % t == 0) {
                    arr3.push(t);
                }
            }
            if (arr3[0] == j) {
                arr1.push(arr2[i])
                arr2.splice(i, 1)
                console.log(arr1)

            }
        }
    }
    document.getElementById("res3").innerText = arr1
}

function ex3lab4() {
    var arr_el = [];
    var lim = document.getElementById("r-3").value
    for (let i = 0; i <= lim; i++) {
        var count = 0;
        var arr_cube = [];
        for (let j = 1; j <= 20; j++) {
            for (let g = 1; g <= 20; g++) {
                if (count == 3) {
                    arr_el.push(i)
                    document.getElementById("res5").innerText = "Числа с помощью которых получилось то самое минимальное число: " + arr_cube
                    break
                }
                if (i == Math.pow(j, 3) + Math.pow(g, 3)) {
                    count += 1
                    arr_cube.push(j, g)
                }

            }
        }

    }
    if (arr_el.length == 0){
        document.getElementById("res4").innerText ="Такого числа нет в диапазоне от 0 до "+lim
    }
    else {
        document.getElementById("res4").innerText = "Минимальное число, которое получилось суммой кубов двух двугих чисел: " + arr_el[0]
    }
}

function ex7lab4() {
    var arr = [];
    var lim = document.getElementById("r-7").value
    for (let i = 0; i <= lim; i++) {
        var m = Math.pow(2, i) - 1
        arr.push(m)
    }
    document.getElementById("res6").innerText = "Вот они встречайте их бурными аплодисментами: " + arr

}