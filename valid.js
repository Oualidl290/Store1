//signUp form validation
function myValidationFormUp (){
    const UserName = document.getElementById('UN');
    const Email = document.getElementById('E');
    const Password = document.getElementById('PW');
    Oppinion = document.querySelectorAll('input[type="checkbox"]');
    Model = /^[a-z]/i;
    Model1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    Model2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    valid = true


    if(UserName==""){
        alert('user name required')
        valid=false
    }
    if(!Model.test(UserName.value)){
        alert('User Name not match')
        valid = false
    }
    if(Email==""){
        alert('email required exp: jzovhhv@gmail.com')
        valid=false
    }
    if(!Model1.test(Email.value)){
        alert('enter avalid email')
        valid=false
    }
    if(Password==""){
        alert('please enter password')
        valid=false
    }
    if(!Model2.test(Password.value)){
        alert('password faild !')
        valid = false
    }
    if (!Oppinion[0].checked) {          
        alert("please check the box below");          
        valid = false 
   }
   return valid
}

//signIN form validation

function myValidationFormIn (){
    const UserName = document.getElementById('U');
    const Password = document.getElementById('P');
    Model = /^[a-z]/i;
    Model2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    valid = true

    if(UserName==""){
        alert('user name required')
    }
    if(!Model.test(UserName.value)){
        alert('User Name not match')
        valid = false
    }
    if(Password==""){
        alert('please enter password')
    }
    if(!Model2.test(Password.value)){
        alert('password faild !')
        valid = false
    }
   return valid
}