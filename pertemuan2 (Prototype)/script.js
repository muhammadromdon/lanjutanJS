// Prototype
// Studi kasus, menyempurnakan efektifias code dari pertemuan 1, jadi tidak perlu mengelola 2 object.

// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype)            // ini code dibelakang layar (jadi kita tidak butuh mengelola 2 object seperti dipertemuan 1)
//     this.nama = nama
//     this.energi = energi
// }

// let romdon = new Mahasiswa('Romdon', 10)

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi
//     console.log(`Halo ${this.nama}, selamat makan!`)
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2
//     console.log(`Halo ${this.nama}, selamat tidur!`)
// }

// Mahasiswa.prototype.olahraga = function (jam) {
//     this.energi -= jam
//     console.log(`Halo ${this.nama}, selamat berolahraga!`)
// }

// Penggunaan prototype masih asing, jadi sebaiknya gunakan class seperti OOP di PHP dan lainnya

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama
        this.energi = energi
    }

    makan(jam) {
        this.energi += jam
        console.log(`Halo ${this.nama}, selamat makan!`)
    }

    tidur(jam) {
        this.energi += jam * 2
        console.log(`Halo ${this.nama}, selamat tidur!`)
    }

    olahraga(jam) {
        this.energi -= jam
        console.log(`Halo ${this.nama}, selamat berolahraga!`)
    }

}

let romdon = new Mahasiswa('Romdon', 10)

let angka = [1, 2, 3]

// Dibalik layar seperti ini

// let angka = new Array()                                                // Javascript membuat array kosong yang mempunyai parent pastinya prototype karena object.

// function Array() {
//     let this = Object.create(Array.prototype)
// }

// Jadi jika kita membuat array, array itu pasti mewarisi proto dari objectnya sehingga bisa menggunakan bbrp method seperti dibawah

console.log(angka.reverse())