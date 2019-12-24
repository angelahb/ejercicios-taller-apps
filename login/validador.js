
var button = document.getElementById('login');

button.onclick = function() {
   var username = document.getElementById('mail').value;
   var password = document.getElementById('psw').value;


      if(username == "ejemplo@gmail.com" && password == "123456") {
         console.clear();
         console.log("Iniciando sesión…");

      }else{
         console.clear();
         console.log("Email y/o contraseña incorrectos");
      }

}
