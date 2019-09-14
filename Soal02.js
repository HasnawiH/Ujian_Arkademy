
//function validasi username
function is_username_valid(username){
var regex = /^[a-zA-Z]{1}[a-zA-Z0-9]/g

    if (username.length >= 5 
        && username.length <= 9 
        && regex.test(username)){

        return true
    } 

    return false
}


//function validasi password
function is_password_valid(password){
    var regex = /[a-zA-Z0-9_#$%]{1}@{1}/g

    if (password.length >= 8 
        && regex.test(password) ){
        return true
    }
    return false

}


console.log(is_username_valid('@sony')) //false
console.log(is_username_valid('Ayu99v')) //true
console.log(is_password_valid('p@ssWOrd#')) //true
console.log(is_password_valid('COd3YourFuture!#')) //false