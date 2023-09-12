   function alerta() {
       alert("Hola el/ella acabas de interactuar con el respectivo boton ");
   }
    
   alerta(showAlert);

    let pregunta = prompt ("Como te llamas?");
    
    alert(`Hola, ${pregunta} como estas?, Espero que tengas un buen dia. Si tenes alguna duda al respecto podes unirte a mi servidor y abrir ticket para poder resolver tu duda`);

    const colors = ["#FF5733", "#33FF57", "#5733FF", "#33B5FF", "#FF33E9"];

    // Función para cambiar el color de fondo
    function changeBackgroundColor() {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const newColor = colors[randomIndex];
      document.body.style.backgroundColor = newColor;
    }
    
    // Asignar la función al evento de clic del botón
    const changeColorButton = document.getElementById("changeColorButton");
    changeColorButton.addEventListener("click", changeBackgroundColor);
  
    
    
