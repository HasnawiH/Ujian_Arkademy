//function cetak gambar

function cetak_gambar (number){
    var bintang = '*'
    var garis = '='

    if ( number % 2 == 0 ) return 'Parameter harus bilangan ganjil !'

    console.log('---panjang---')

    for (var i = 0; i < number; i++){
        if (Math.floor(number/2) == i){
            console.log(bintang.repeat(number))
        } else {
            console.log(bintang +garis.repeat(number-2)+ bintang)
        }
    }
}

console.log(cetak_gambar(5))