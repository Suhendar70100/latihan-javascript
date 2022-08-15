
 function kubus(a,b){
    var total, volumeA, volumeB ;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB ;
     return total;
 }

 console.log(kubus(8,3));
 console.log(kubus(8,8));
 console.log(kubus(8,6));

 function tambah(c,d){
     return c+d;
 }

console.log( tambah(2,3));

var a = parseInt(prompt("Masukan Nilai 1 "));
var b = parseInt(prompt("Maksukan Nilai 2 "));

console.log(tambah(a,b));

// function argument
function taro(){
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}
 var coba = taro(1,2,3);
 console.log(coba);

//  function rekursif
 function cetakAngka(n){
     if(n === 0){
         return;
     }
     console.log(n);
     cetakAngka(n-1);
 }
 cetakAngka(10);

//  function declaration & expression

function tampilNama(nama){
    console.log("Nama Anda Adalah : " + nama);
}

isi= prompt("Isikan Nama Anda");
tampilNama(isi);

// expression
 var  tampilNama=function(ngaran){
     console.log("Ngaran Maneh Adalah : " + ngaran);
 }

 isian= prompt("Asupkeun Nama Maneh : ");
 tampilNama(isian)