// Perbedaan Var, Let, Const
// Javascript menganut method function scope, jadi kita bisa mengakses var yang berada didalam block scope fungsi itu sendiri. contohnya seperti dibawah ini

// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log(i)

// Untuk mengatasinya kita harus mengubah scopenya menjadi function scope, contoh dibawah ini

// function tes() {
//     for (var i = 0; i < 10; i++) {
//         console.log(i)
//     }
// }

// tes()

// console.log(i)                                                      // Terjadi error karena memang seharusnya kita tidak bisa mengakses isi variabel didalam fungsi tes

// Untuk mengatasi error antar variabel kita bisa mengubah fungsinya menjadi function expression, atau ubah var menjadi let, karena let menganut block scope
// Contoh seperti kasus pertama tapi kali ini menggunakan let

// for (let j = 1; j < 10; j++) {
//     console.log(j)
// }

// console.log(j)

// Const adalah definisi variabel sama seperti var atau let, tapi jika kita ubah isi variabelnya secara paksa, maka tidak akan berubah karena bersifat constanta.
// Contohnya seperti berikut

const num = [1, 2, 3]

// num = [1, 2, 3, 4]                                               // Jelas tidak akan berubah, karena kita coba mengubah variabel const utamanya

// Const masih bisa kita ubah asalkan tidak mengubah semua isi, contohnya seperti dibawah

num.push(4)

console.log(num)