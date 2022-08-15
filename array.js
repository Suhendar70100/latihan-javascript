// manipulasi array

// Menambah isi array
var array=[];
array=["Suhendar", "Badranaya", "Sueb", 234];

console.log(array[0])
// Mengahapus array
array[1]= undefined;
console.log(array);
// Menampilkan isi array
for( var i = 0; i < array.length ; i++){
    console.log(array[i]);
}

// Method pada array
// join
var lagi= [];
lagi= ["Sueb", "Izal", "sagung", 1234];
console.log(lagi.join(" - "));
// push & pop

lagi.push("Sampe");
console.log(lagi.join(" - "));

lagi.pop();
console.log(lagi.join(" - "));

// unshift & shift
lagi.unshift("Sampe");
console.log(lagi.join(" - "));

lagi.shift("Sampe");
console.log(lagi.join(" - "));

// splice & slice
    // splice(index awal, mau dihapus, elemen baru)
lagi.splice(2, 1, "Sabun");
console.log(lagi.join(" - "));

// Slice
// slice(awal, akhir)


var lagi2= [];
lagi2= ["Sueb", "Izal", "sagung", 1234, "Sungsang"];

var lagi3= lagi2.slice(1,3);
console.log(lagi3.join(" - "));

// foreach & map

var angka= [1,2,3,4,5,6,7,8];
angka.forEach(function(e){
console.log(e);
});

var nama = ["Sueb", "sagung", "SUpri"];

nama.forEach(function(e, i){
    console.log("Mahasiwa Ke- " + (i+1) + " adalah : " + e);
})
// map Mengembalikan array

var angka2 = [1,2,3,4,5,6,7,8];

angka3 = angka2.map(function(e){
    return e * 2;
})
console.log(angka3.join(" - "));

// sort
var angka4 = [1,3,5,6,8,9,0];
console.log(angka4.join(" - "));
angka4.sort(function(a,b){
    return a-b;
});
console.log(angka4.join(" - "));

// filter & sind
var angka5 = [1,3,5,6,8,9,0];
var angka6 = angka5.filter(function(e){
    return e > 5;
});
console.log(angka6.join(" - "));

// find tiadk mengembalikan nilai array

var angka5 = [1,3,5,6,8,9,0];
var angka6 = angka5.find(function(e){
    return e > 5;
});
console.log(angka6);


