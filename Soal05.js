
//function cetak string acak

function cetak(param) {
    var string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var panjang = 32;
    for (var i = 0; i < param; i++){
        var temp = '';
        for (var j=0; j<panjang; j++) {
            var hasil = Math.floor(Math.random() * string.length);
            temp+= string.substring(hasil,hasil+1);
        }
        console.log(temp)
    }
}

console.log(cetak(3))