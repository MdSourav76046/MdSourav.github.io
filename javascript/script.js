const btn = document.getElementById("btn-1");
let valid;
console.log(btn);
btn.addEventListener('click',function(e){
    valid = 0;
    e.preventDefault();
    console.log("hi");
    let email = document.getElementById("sourav").value;
    console.log(email);
    ValidateEmail(email,valid);
    if(!valid){
        let valField =  document.getElementById("val");
        valField.classList.add("not-valid");
        valField.classList.remove("valid");
    }
    else{
        let valField =  document.getElementById("val");
        valField.classList.add("valid");
        valField.classList.remove("not-valid");
        let name = document.getElementById("name").value;
        console.log(name);
        let address =  document.getElementById("address").value;
        console.log(address);
        let message = document.getElementById("messege").value;
        console.log(message);
        let number = document.getElementById("number").value;
        console.log(number);
        let mes = "Hello I am "+ name+"\nI live in "+ address+"\n"+ message+"\n"+
        "You can connect with me, Here is my mail and my contact number: \n"+
        "Email : "+ email + "\nContact nuber : " + number + "\nHave a good day!";
        console.log(mes);
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "mdsourav2010776146@gmail.com",
            Password : "9472E313A191088725724DF273A4DC4DF1FA",
            To : 'mdsourav76046@gmail.com',
            From : "mdsourav2010776146@gmail.com",
            Subject : "I want to connect with you",
            Body : mes
        }).then(
          message => alert(message)
        );
    }
})

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input==undefined){
        return false;
    }
    if (input.match(validRegex)) {
        valid = 1
        return true;
    } 
    else {
        return false;
    }
  
  }
