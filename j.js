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
typ=true
window.addEventListener('load',function() {
document.getElementById('kom').hidden=!document.getElementById('kom').hidden
const button = document.getElementById("bu")
const outp = document.getElementById('eee')
const met=document.querySelector('input[value="ko"]')
const no=document.querySelector('input[value="m"]')
no.addEventListener('change',function() {
    document.getElementById('e').hidden=!document.getElementById('e').hidden
    document.getElementById('kom').hidden=!document.getElementById('kom').hidden
    typ=!typ
    document.getElementById('n').placeholder='корзинки'
    document.getElementById('k').placeholder='шары'
})
met.addEventListener('change',function() {
    document.getElementById('kom').hidden=!document.getElementById('kom').hidden
    document.getElementById('e').hidden=!document.getElementById('e').hidden
    typ=!typ
    document.getElementById('n').placeholder='n'
    document.getElementById('k').placeholder='k'
})
button.addEventListener('click',function (){
if (typ==true){
    const sel =document.querySelector('input[name="b"]:checked')
    outp.value=Math.round(t[sel.value](document.getElementById('n').value,document.getElementById('k').value))
} else{
    const tel =document.querySelector('input[name="c"]:checked')
    if (tel.value=='e1'){
        outp.value=Math.round(t['C'](document.getElementById('n').value-1,document.getElementById('k').value-1))
    }
    if (tel.value=='e2'){
        outp.value=Math.round(t['C']((Number(document.getElementById('n').value)+Number(document.getElementById('k').value)-1),document.getElementById('k').value-1))
    }else{
        outp.value=Math.round(t['C'](document.getElementById('n').value,document.getElementById('k').value))
    }
}

})
})
