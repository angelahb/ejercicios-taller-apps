
var button = document.getElementById('login');

function Redireccionar() {
	document.location.assign('C:\\Users\\angel\\Documents\\proyectos\\ejercicios-taller-apps\\layout\\index.html');
}

button.onclick = function() {
   var username = document.getElementById('mail').value;
   var password = document.getElementById('psw').value;
   var labelText = document.getElementById('msglogin');


      if(username == "ejemplo@gmail.com" && password == "123456") {
         console.clear();
         console.log("Iniciando sesión…");
         labelText.innerHTML = "";
         Redireccionar();
      }else{
         console.clear();
         console.log("Email y/o contraseña incorrectos");
         labelText.innerHTML = "Email y/o contraseña incorrectos";
      }

}
