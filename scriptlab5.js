function ex5_1lab5(){
    var str1 = 'aaa bbb ccc';
    var st1 = str1.substr(0,4) + str1.substr(8)
    document.getElementById("res5_1").innerText = st1
}
function ex5_2lab5(){
    var str1 = 'aaa bbb ccc';
    var st1 = str1.substring(0,4) + str1.substring(8,11)
    document.getElementById("res5_2").innerText = st1
}
function ex5_3lab5(){
    var str1 = 'aaa bbb ccc';
    var st1 = str1.slice(0,4) + str1.slice(8,11)
    document.getElementById("res5_3").innerText = st1
}
function ex11lab5(){
    var str1 = 'я изучаю javascript';
    var st1 = str1.substr(0,1).toUpperCase() + str1.substring(1)
    document.getElementById("res11").innerText = st1
}
function ex9lab5(){
    var str1 = 'a.a aba aea';
    const regex = /a\.a/;
    const found = str1.match(regex);
    document.getElementById("res9").innerText = found;
}
function ex24lab5(){
    var str1 = 'aba aea aca aza axa a-a a#a';
    const regex = /a[^ex\s]a/g;
    const found = str1.match(regex);

    document.getElementById("res24").innerText = found

}