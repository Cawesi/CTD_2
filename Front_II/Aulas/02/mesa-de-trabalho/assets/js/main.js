// Etapa 01
let username = prompt("\nHello, User... Be Welcome!\n\nWhat's your name?");

if (username == ""){

    while(username == ""){

        alert('Name is mandatory!');
        username = prompt("What's your name?");
    };
};

let phone = prompt("What's your phone number?");

if (phone == ""){

    while(phone == ""){

        alert('Phone number is mandatory!');
        phone = prompt("What's your phone number?");
    };
}

let whatsapp_number = confirm("This phone number is Whatsapp?");

alert(`Thanks ${username}, some consultant will go call you, at the number ${phone}.`);

console.log(`name: ${username}, phone: ${phone}, allow message Whatsapp: ${whatsapp_number}`);