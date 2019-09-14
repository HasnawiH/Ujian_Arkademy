// function biodata

function biodata(){
    return {
        name : 'Hasnawi',
        adress : 'Jl. Poros Salutambung-Aralle KM 8 Kabiraan, Kec. Ulumanda Kab. Majene Provinsi SULBAR',
        hobbies : ['Ngoding','Sepak Bola','Catur'],
        is_married : false,
        list_school : [ { university : 'Universitas Islam Negeri Alauddin Makassar'}, 
                        { year_in : '2011'}, 
                        { year_out : '2016'},
                        { major : ' Teknik Informatika'}],
        skills :  [ { HTML : 'Advanced'}, 
                    { CSS : 'Advanced'},
                    { JAVASCRIPT : 'Beginner'}],
        interest_in_coding : true
    }
}

console.log(JSON.stringify( biodata() ))