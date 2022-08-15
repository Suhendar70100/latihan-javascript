var tanya = true;
while ( tanya){
// menangkap pilihan
var p = prompt("Pilih : Gajah, Semut, Orang");

// menangkap pilihan komputer
var comp = Math.random();


if( comp < 0.34){
    comp = "Gajah";
} else if( comp >= 0.34 && comp < 0.64){
    comp = "Semut";
} else {
    comp = "Orang"
}

var hasil = "";
// menentukan rules

if ( p == comp){
    hasil = "SERI";
} else if( p == "Gajah"){
    // if( comp == "Orang"){
    //     hasil = "MENANG";
    // } else {
    //     hasil = "KALAH";
    // }
    hasil = (comp == "Orang") ? "MENANG" : "KALAH";
} else if( p == "Orang"){
   hasil = (comp == "Gajah") ? "KALAH" : "MENANG";
}else if (p == "Semut"){
    hasil = ( comp == "Orang")? "KALAH" : "MENANG";
} else{
    hasil = "Memasukan Pilihan yang Salah";
}

// Tampil hasil

alert("Kamu Memilih : " + p + " Dan Komputer Memilih : " + comp + "\nMaka Hasilnya : Kamu " + hasil);
tanya = confirm("Lagi?");
}
alert("Terima kasih Telah Bermain");
