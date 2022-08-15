// membuat object literal
var mhs={
    nama : "Suhendar",
    umur : 20,
    ipk  : [4.00 , 4.00, 4.00],
    alamat : {
        jalan: "Jl. Cibeureum ",
        Kota : "bandung",
        privinsi : "Jawa Barat"
    }
};
// menggunakan function declaration
function buatObjectMahasiswa(nama, umur, ipk){
    var mhs1 = {};
    mhs1.nama = nama;
    mhs1.umur = umur;
    mhs1.ipk = ipk;
    return mhs1;
}

var mhs2= buatObjectMahasiswa("Suhendar", 20, 4.00);
// Mwnggunakan constructor

function Mahasiswa(nama, umur, ipk){
    this.nama = nama;
    this.umur = umur;
    this.ipk= ipk;
}

var mhs3 = new Mahasiswa("Sueb", 22, 3.00);

// Konsep this
