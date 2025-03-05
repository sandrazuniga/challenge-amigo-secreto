// Arreglo donde se almacenarán los nombres ingresados
let nombres = [];

// Función para agregar un nombre a la lista
function agregarNombre() {
    // Obtiene el valor del input de texto
    let input = document.getElementById("nombre");
    let nombre = input.value.trim(); // Elimina los espacios al inicio y al final del nombre
    
    // Verifica si el campo está vacío y muestra una alerta
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Sale de la función si el nombre está vacío
    }
    
    // Verifica si el nombre ya ha sido ingresado previamente
    if (nombres.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return; // Sale de la función si el nombre ya existe en la lista
    }
    
    // Agrega el nombre a la lista
    nombres.push(nombre);
    
    // Muestra la lista actualizada de nombres en el HTML
    document.getElementById("listaNombres").textContent = nombres.join(", ");
    
    // Limpia el campo de texto después de agregar el nombre
    input.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verifica si hay al menos un nombre en la lista
    if (nombres.length === 0) {
        alert("Debe agregar al menos un nombre antes de sortear.");
        return; // Sale de la función si no hay nombres para sortear
    }

    // Genera un índice aleatorio para seleccionar un amigo secreto
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    
    // Extrae el nombre del amigo secreto seleccionado de la lista y lo elimina
    let amigoSecreto = nombres.splice(indiceAleatorio, 1)[0];

    // Muestra el resultado en el HTML
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSecreto;

    // Verifica si ya no quedan nombres en la lista
    if (nombres.length === 0) {
        alert("Se acabaron los amigos"); // Muestra una alerta cuando ya no quedan amigos para sortear
        document.getElementById("listaNombres").textContent = "Ya no hay más amigos"; // Muestra un mensaje en la lista
    } else {
        // Actualiza la lista de nombres restantes
        document.getElementById("listaNombres").textContent = nombres.join(", ");
    }

    // Muestra el botón de "Resetear"
    document.getElementById("btnReset").style.display = "block";
}

// Función para resetear la lista de nombres
function resetearLista() {
    // Reinicia el arreglo de nombres a un array vacío
    nombres = [];
    
    // Limpia la lista de nombres y el resultado en el HTML
    document.getElementById("listaNombres").textContent = "";
    document.getElementById("resultado").textContent = "";
    
    // Oculta el botón de "Resetear" nuevamente
    document.getElementById("btnReset").style.display = "none";
}