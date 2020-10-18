// Execution Context, Hoisting & Scope

// console.log(nama)

// var nama = 'Romdon'

// yang terjadi diatas disebut creation phase pada global context
// jadi nama var diisi undefined
// yang terjadi diatas adalah contoh hoisting, jadi jika menjalankan log akan dicari dulu nama fungsi atau var yang dipanggil dan diisi dengan undefined
// Hoisting = menaikkan variable atau fungsi, jadi akan diisi nilai undefined jika dieksekusi terlebih dahulu sebelum didefinisikan

// Execution Phase adalah phase pengeksekusian sebuah method

var nama = 'Romdon'
var umur = 24

function sayHello() {
    return `Halo nama saya ${nama}, dan saya berumur ${umur}`
}

console.log(sayHello())

// diatas merupakan contoh eksekusi sempurna, jika kita memanggil log sebelum var nama dan umur, maka var nama dan umur akan diisi undefined

// Contoh Scope

var username = '@_donromdon'

function instagramURL(username) {
    var instagramURL = 'http://instagram.com/'
    return instagramURL + username
}

console.log(instagramURL(username))

// Lumayan tricky untuk dipahami, tapi jika sebuah fungsi tidak memiliki parameter, maka akan hoisting mencari variable di global context untuk mengisinya
