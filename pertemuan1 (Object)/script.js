// Mengulang kembali pembahasan object, berikut bbrp cara membuat object

// 1. Object literal

// let mahasiswa1 = {
//     nama: 'Romdon',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Halo ${this.nama}, selamat makan.`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Agus',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Halo ${this.nama}, selamat makan.`)
//     }
// }

// Problem : tidak efektif jika digunakan untuk banyak object
// Jika menggunakan object literal, instansiasi untuk object baru harus ditulis atau copy kembali dengan nama obj yang berbeda

// 2. Function Declaration

const kegiatanMahasiswa = {                                                 // Object parent yang berisi method untuk fungsi Mahasiswa
    makan: function (porsi) {
        this.energi += porsi
        console.log(`Halo ${this.nama}, selamat makan.`)
    },

    olahraga: function (jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama}, selamat berolahraga`)
    },

    tidur: function (jam) {
        this.energi += jam * 2
        console.log(`Halo ${this.nama}, selamat tidur`)
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(kegiatanMahasiswa)                          // Object.create menangkap parameter kegiatanMahasiswa yang bersifat pewarisan, jadi kita tidak perlu mendaftarkannya lagi di fungsi deklarasinya

    mahasiswa.nama = nama
    mahasiswa.energi = energi

    // mahasiswa.makan = kegiatanMahasiswa.makan                              // Jika menggunakan Object.create ini tidak dibutuhkan lagi,    
    // mahasiswa.olahraga = kegiatanMahasiswa.olahraga
    // mahasiswa.tidur = kegiatanMahasiswa.tidur

    return mahasiswa
}

let romdon = Mahasiswa('Romdon', 10)

let agus = Mahasiswa('Agus', 20)

// 3. Constructor Function

// function Mahasiswa(nama, energi) {
//     this.nama = nama
//     this.energi = energi

//     this.makan = function (porsi) {
//         this.energi += porsi
//         console.log(`Halo ${this.nama}, selamat makan.`)
//     }

//     this.olahraga = function (jam) {
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat berolahraga`)
//     }
// }

// let romdon = new Mahasiswa('Romdon', 10)

// Dengan menggunakan constructor function lebih mudah, tidak perlu membuat object kosong dan mereturnnya seperti function declaration

