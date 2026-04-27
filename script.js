"use strict";

function initiate() {
    document.getElementById('btnArea').onclick = area;
    document.getElementById('btnPrice').onclick = price;
}
window.onload = initiate;

let l;
let w;
let d;
let answer;

function area() {
    l = document.getElementById('len').value;
    w = document.getElementById('wid').value;
    d = document.getElementById('dep').value;

    answer = l * w * d;
    document.getElementById('resultArea').innerHTML = answer;
} function price() {
    let con = document.querySelector("input[name=con-type]:checked").value;
    document.getElementById('resultPrice').innerHTML = con * answer;
}

