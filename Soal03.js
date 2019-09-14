
//function kata frasa
function string_frasa(string){
    var regex = /nana/g
    var count = 0
    
    var match = regex.exec(string)
    while (match !== null){
        match = regex.exec(string)
        count++
    }

    return 'Ditemukan '+count+' kali'
}

console.log(string_frasa('banananana'))
