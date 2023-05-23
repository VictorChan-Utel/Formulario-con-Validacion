const nombre = document.getElementById("name");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    
    do 
    {
        if(nombre.value.length <3)
        {
        warnings += `El nombre y apellido deben contener por lo menos 3 caracteres <br>`
        entrar = true
        }
        if(!regexEmail.test(email.value))
        {
        warnings += `El email no es valido, debe contener un @ y un dominio(ej: hola@hello.com) <br>`
        entrar = true
        }
        if(password.value.length <8)
        {
        warnings += `La contraseña no es valida, debe contener por lo menos 8 caracteres <br>`
        entrar = true;
        }
        if(password.value!=confPassword.value)
        {
        warnings += `Las contraseñas no coinciden <br>`
        entrar = true;
        }

    if(entrar)
    {
        parrafo.innerHTML = warnings
    }
    else
    {
        parrafo.innerHTML = "Registro exitoso <br> Se ha enviando un correo de confirmacion al email registrado"
    }
    }while (entrar=false);
    
})