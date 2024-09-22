var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var number = document.getElementById('number')
var dry = document.getElementById('dry')
var ramen = document.getElementById('ramen')
var agreement = document.getElementById('agreement')

function checkInputs(){
 
    if(username.value == ''){
        alert("username cannot be empty")
    }
    else if(!email.value.endsWith('@gmail.com')){
        alert('email must end with @gmail.com')
    }
    else if(!number.value.startsWith('+62')){
        alert('Number must start with +62' ) 
    }
    else if(!dry.checked && !ramen.checked){
        alert('Must select at 1 type of ramen')
    }
    else if(!agreement.checked){
        alert('agreement box must be checked')
    }
    else{
        confirm('sucessfully register')
    }
}

