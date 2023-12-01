t={}
function f(n) {
    /*if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return n * f(n-1);*/
    return (n != 1) ? n * f(n - 1) : 1
}

function C(n, k) {
    return (f(n) / (f(k) * f(n-k)));
}

function A(n, k) {
    return (f(n) / f(n-k));
}

function P(n,k) {
    return f(n);
}
t['P']=P
t['A']=A
t['C']=C
window.addEventListener('load',function() {
const button = document.getElementById("bu")
const outp = document.getElementById('e')
button.addEventListener('click',function (){
const sel =document.querySelector('input[name="b"]:checked')
outp.value=t[sel.value](document.getElementById('n').value,document.getElementById('k').value)
})
})
