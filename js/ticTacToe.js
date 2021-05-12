var kolej=Math.floor(Math.random()*2)+1;
var pola={a1:7,a2:7,a3:7,b1:7,b2:7,b3:7,c1:7,c2:7,c3:7,}
const kurna =new Audio("sounds/7.mp3");
const vin = new Audio("sounds/5.mp3");
window.onload=spr;
function change(what) {if(pola[what.id]==7){if(kolej%2 == 1){what.innerHTML="X";pola[what.id]=1;spr()}}}

function spr(){
  var polaOb =document.getElementById('pola');
  if (pola.a1+pola.a2+pola.a3==3||pola.b1+pola.b2+pola.b3==3||pola.c1+pola.c2+pola.c3==3||pola.a1+pola.b1+pola.c1==3||pola.a2+pola.b2+pola.c2==3||pola.a3+pola.b3+pola.c3==3||pola.a1+pola.b2+pola.c3==3||pola.c1+pola.b2+pola.a3==3) {polaOb.style.color="red";polaOb.innerHTML='<button class="end" onclick="location.reload()">Zwysięstwo</button>';vin.play();}
  else if (pola.a1+pola.a2+pola.a3==6||pola.b1+pola.b2+pola.b3==6||pola.c1+pola.c2+pola.c3==6||pola.a1+pola.b1+pola.c1==6||pola.a2+pola.b2+pola.c2==6||pola.a3+pola.b3+pola.c3==6||pola.a1+pola.b2+pola.c3==6||pola.c1+pola.b2+pola.a3==6) {polaOb.style.color="blue";polaOb.innerHTML='<button class="end" onclick="location.reload()">Porażka</button>';kurna.play();}
  else if (pola.a1+pola.a2+pola.a3+pola.b1+pola.b2+pola.b3+pola.c1+pola.c2+pola.c3==13||pola.a1+pola.a2+pola.a3+pola.b1+pola.b2+pola.b3+pola.c1+pola.c2+pola.c3==14){polaOb.style.color="purple";polaOb.innerHTML='<button class="end" onclick="location.reload()">REMIS</button>';kurna.play();}
  kolej++;
  if (kolej%2 == 0) {bot()}};

function bot()
{
//instant vin
/*-*/if (pola.a1==2&&pola.a2==2&&pola.a3==7){A3()}
else if (pola.a1==2&&pola.a2==7&&pola.a3==2){A2()}
else if (pola.a1==7&&pola.a2==2&&pola.a3==2){A1()}
else if (pola.b1==2&&pola.b2==2&&pola.b3==7){B3()}
else if (pola.b1==2&&pola.b2==7&&pola.b3==2){B2()}
else if (pola.b1==7&&pola.b2==2&&pola.b3==2){B1()}
else if (pola.c1==2&&pola.c2==2&&pola.c3==7){C3()}
else if (pola.c1==2&&pola.c2==7&&pola.c3==2){C2()}
else if (pola.c1==7&&pola.c2==2&&pola.c3==2){C1()}
else if (pola.a1==2&&pola.b1==2&&pola.c1==7){C1()}
else if (pola.a1==2&&pola.b1==7&&pola.c1==2){B1()}
else if (pola.a1==7&&pola.b1==2&&pola.c1==2){A1()}
else if (pola.a2==2&&pola.b2==2&&pola.c2==7){C2()}
else if (pola.a2==2&&pola.b2==7&&pola.c2==2){B2()}
else if (pola.a2==7&&pola.b2==2&&pola.c2==2){A2()}
else if (pola.a3==3&&pola.b3==3&&pola.c3==7){C3()}
else if (pola.a3==3&&pola.b3==7&&pola.c3==3){B3()}
else if (pola.a3==7&&pola.b3==3&&pola.c3==3){A3()}
else if (pola.a1==2&&pola.b2==2&&pola.c3==7){C3()}
else if (pola.a1==2&&pola.b2==7&&pola.c3==2){B2()}
else if (pola.a1==7&&pola.b2==2&&pola.c3==2){A1()}
else if (pola.c1==2&&pola.b2==2&&pola.a3==7){A3()}
else if (pola.c1==2&&pola.b2==7&&pola.a3==2){B2()}
else if (pola.c1==7&&pola.b2==2&&pola.a3==2){A1()}
//def 1.0
else if (pola.a1==1&&pola.a2==1&&pola.a3==7){A3()}
else if (pola.a1==1&&pola.a2==7&&pola.a3==1){A2()}
else if (pola.b1==1&&pola.b2==1&&pola.b3==7){B3()}
else if (pola.a1==7&&pola.a2==1&&pola.a3==1){A1()}
else if (pola.b1==7&&pola.b2==1&&pola.b3==1){B1()}
else if (pola.b1==1&&pola.b2==7&&pola.b3==1){B2()}
else if (pola.c1==1&&pola.c2==1&&pola.c3==7){C3()}
else if (pola.c1==7&&pola.c2==1&&pola.c3==1){C1()}
else if (pola.c1==1&&pola.c2==7&&pola.c3==1){C2()}
else if (pola.a1==1&&pola.b1==1&&pola.c1==7){C1()}
else if (pola.a1==7&&pola.b1==1&&pola.c1==1){A1()}
else if (pola.a2==1&&pola.b2==1&&pola.c2==7){C2()}
else if (pola.a1==1&&pola.b1==7&&pola.c1==1){B1()}
else if (pola.a2==1&&pola.b2==7&&pola.c2==1){B2()}
else if (pola.a3==1&&pola.b3==1&&pola.c3==7){C3()}
else if (pola.a2==7&&pola.b2==1&&pola.c2==1){A2()}
else if (pola.a3==7&&pola.b3==1&&pola.c3==1){A3()}
else if (pola.a3==1&&pola.b3==7&&pola.c3==1){B3()}
else if (pola.a1==1&&pola.b2==1&&pola.c3==7){C3()}
else if (pola.c1==1&&pola.b2==7&&pola.a3==1){B2()}
else if (pola.a1==7&&pola.b2==1&&pola.c3==1){A1()}
else if (pola.a1==1&&pola.b2==7&&pola.c3==1){B2()}
else if (pola.c1==1&&pola.b2==1&&pola.a3==7){A3()}
else if (pola.c1==7&&pola.b2==1&&pola.a3==1){C1()}
//atack 1.0
else if (pola.b1!=1&&pola.b2!=1&&pola.b3!=1){srodek()}
else if (pola.a3!=1&&pola.b3!=1&&pola.c3!=1){ppion()}
else if (pola.a1!=1&&pola.b2!=1&&pola.c3!=1){lskos()}
else if (pola.c1!=1&&pola.c2!=1&&pola.c3!=1){dol()}
else if (pola.a1!=1&&pola.b1!=1&&pola.c1!=1){lpion()}
else if (pola.a2!=1&&pola.b2!=1&&pola.c2!=1){spion()}
else if (pola.a1!=1&&pola.a2!=1&&pola.a3!=1){gora()}
else if (pola.a3!=1&&pola.b2!=1&&pola.c1!=1){pskos()}
//zab 1.0
else if (pola.a1==7){A1()}
else if (pola.a3==7){A3()}
else if (pola.a2==7){A2()}
else if (pola.b1==7){B1()}
else if (pola.b3==7){B3()}
else if (pola.b2==7){B2()}
else if (pola.c2==7){C2()}
else if (pola.c3==7){C3()}
else if (pola.c1==7){C1()}
//error krytyczny
else{kolej++}

//funkcje
function gora() {if(pola.a1==7){A1()}else if(pola.a2==7){A2()}else if(pola.a3==7){A3()}}
function srodek() {if(pola.b1==7){B1()}else if(pola.b2==7){B2()}else if(pola.b3==7){B3()}}
function dol() {if(pola.c1==7){C1()}else if(pola.c2==7){C2()}else if(pola.c3==7){C3()}}
function lpion() {if(pola.a1==7){A1()}else if(pola.b1==7){B1()}else if(pola.c1==7){C1()}}
function spion() {if(pola.a2==7){A2()}else if(pola.b2==7){B2()}else if(pola.c2==7){C2()}}
function ppion() {if(pola.a3==7){A3()}else if(pola.b3==7){B3()}else if(pola.c3==7){C3()}}
function lskos() {if(pola.a1==7){A1()}else if(pola.b2==7){B2()}else if(pola.c3==7){C3()}}
function pskos() {if(pola.a3==7){A3()}else if(pola.b2==7){B2()}else if(pola.c1==7){C1()}}
//ruch
function A1() {document.getElementById('a1').innerHTML="O";pola.a1=2;spr();}
function A2() {document.getElementById('a2').innerHTML="O";pola.a2=2;spr();}
function A3() {document.getElementById('a3').innerHTML="O";pola.a3=2;spr();}
function B1() {document.getElementById('b1').innerHTML="O";pola.b1=2;spr();}
function B2() {document.getElementById('b2').innerHTML="O";pola.b2=2;spr();}
function B3() {document.getElementById('b3').innerHTML="O";pola.b3=2;spr();}
function C1() {document.getElementById('c1').innerHTML="O";pola.c1=2;spr();}
function C2() {document.getElementById('c2').innerHTML="O";pola.c2=2;spr();}
function C3() {document.getElementById('c3').innerHTML="O";pola.c3=2;spr();}
}
