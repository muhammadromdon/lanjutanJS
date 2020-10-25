// Closure adalah sebuah function yang dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan global scope

// function init() {
//     let nama = 'Romdon'

//     function tampilNama() {
//         console.log(nama)
//     }

//     console.dir(tampilNama)
// }

// init()

// dibawah ini studi kasus function factories, salah satu kegunaan closure

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, have a good time!`)
    }
}

let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')

selamatPagi('Romdon')

// studi kasus lain

let add = (function () {
    let counter = 0
    return function () {
        return ++counter
    }
})()


console.log(add())
console.log(add())
console.log(add())
