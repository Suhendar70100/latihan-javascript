for(var a = 1; a<=10; a++){
    console.log("Pengulangan Ke : " + a);
}
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

while(noAngkot <= jmlAngkot ){
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log("Angkot Berhasil Beroperasi " + noAngkot);
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log("Angkot Sedang Lembur " + noAngkot)
    } else{
        console.log("Angkot Sedang Tidak Beroperasi " + noAngkot);
    }
    noAngkot++;
}