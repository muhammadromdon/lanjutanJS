// Arrow function adalah bentuk lain yang lebih ringkas dari function expression

// const tampilNama = function (nama) {
//     return `Halo ${nama}`
// }

// console.log(tampilNama('Romdon'))

// Contoh diubah menjadi arrow function dibawah ini

// const tampilNama = (nama) => { return `Halo ${nama}` }

// console.log(tampilNama('Romdon'))

// Bentuk lain dari contoh diatas, menggunakan implicit return jika parameter hanya satu bisa diringkas seperti ini (tidak butuh kurung parameter dan block function)

// const tampilNama = nama => `Halo ${nama}`

// console.log(tampilNama('Romdoni'))

// Contoh 2 parameter dibawah ini

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu} ${nama}`
// }

// console.log(tampilNama('Romdon', 'Sore'))

// Jika tidak ada parameter tetap harus ditulis ()

// let helloWorld = () => { return `Hello World` }

// console.log(helloWorld())

// Studi kasus menghitung jumlah huruf dari array mahasiswa dibawah ini

// let mahasiswa = ['Romdon', 'Agus', 'Ervin']

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length
// })

// console.log(jumlahHuruf)

// Diubah menjadi arrow function

// let jumlahHuruf = mahasiswa.map(nama => nama.length)

// console.log(jumlahHuruf)

// Studi kasus terakhir, sama seperti diatas namun kita ingin mengembalikannya sebagai object

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length }))

// console.log(jumlahHuruf)

// Kita harus menggunakan () supaya {} tidak dianggap sebagai block scope



// Konsep this pada arrow function

// Contoh this pada constructor function biasa

// let Mahasiswa = function () {
//     this.nama = 'Romdon'
//     this.umur = '24'

//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, umur saya ${this.umur}`)
//     }
// }

// const romdon = new Mahasiswa()

// Sepertinya arrow function sayhello diatas tidak bermasalah, padahal this pada arrow function tidak seperti pada constructor/declaration function.. this pada arrow function akan naik ke window scope jika diterapkan dalam object literal.

// Contoh studi kasus this lengkap dibawah ini

let box = document.querySelector('.box')

box.addEventListener('click', function () {

    let satu = 'size'
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu]
    }

    this.classList.toggle(satu)

    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})
