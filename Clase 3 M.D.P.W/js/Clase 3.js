console.log("hola")
alert("hola lo quiero mucho")
const calcularsuma = () => {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let s = parseFloat(n1)+ parseFloat(n2)
    console.log(s)
    document.getElementById('res').innerHTML="<i>la suma es "  +s
}
function calcularresta(params) {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let r = parseFloat(n1)- parseFloat(n2)
    console.log(r)
    document.getElementById('res').innerHTML="la resta es "  -r
}
function calcularmulti(params) {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let m = parseFloat(n1)* parseFloat(n2)
    console.log(m)
    document.getElementById('res').innerHTML="la multiplicacion es "  *m
}
function calculardivision(params) {
    let n1=document.getElementById('txtnumero1').value
    let n2=document.getElementById('txtnumero2').value
    let d = parseFloat(n1)/ parseFloat(n2)
    console.log(d)
    document.getElementById('res').innerHTML="la division es "  /d
}
function inicio(){
    document.getElementById("txtnumero1").addEventListener('click',limpiar);
    document.getElementById("txtnumero2").addEventListener('click',limpiar);

}

function limpiar(){
    var activo = document.activeElement.id;
    activo.innerHTML = "";
}