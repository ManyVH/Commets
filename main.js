document.addEventListener('DOMContentLoaded', function () {
    const username = document.getElementById('User');
    const boton = document.getElementById('pasoPage');
   
    boton.onclick = guardar;
    
    
    function guardar() {
        if (username.value==='') {
            alert('Nombre de Usuario Vacío');
            return false;
        } else {
            sessionStorage.setItem('nombreUs', username.value);
            return true;
        }
        
    }
});