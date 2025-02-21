// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se define un array vacío para almacenar los nombres
let nombres = [];

/**
 * Se agrega un nombre a la lista si es válido.
 * @param {string} nombre - Nombre a agregar.
 */
    function agregarAmigo() {
        let amigo = document.getElementById("amigo");
        let nombre = amigo.value.trim();
        if (!amigo) {
            console.error("❌ Error: No se encontró el campo de entrada 'amigo'");
            return;
        }
    
    // Validaciones
        if (nombre === "") {
        console.log("❌ Error: No se puede agregar un nombre vacío.");
        alert("❌ Error: No se puede agregar un nombre vacío.");
        return;
        }
            if (nombres.includes(nombre)) {
            console.log(`❌ Error: El nombre "${nombre}" ya está en la lista.`);
            alert(`❌ Error: El nombre "${nombre}" ya está en la lista.`);
            return;
        }
            nombres.push(nombre);
            actualizarLista();
            amigo.value = ""; // Limpiar input
            console.log(`✅ Nombre "${nombre}" agregado correctamente.`);
            alert(`✅ Nombre "${nombre}" agregado correctamente.`);
}

/**
 * Se muestra la lista de nombres actualizadas.
 */
    function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
    
    // Contenedor de texto que permite ajuste dinámico
    let spanTexto = document.createElement("span");
    spanTexto.textContent = nombre;
    spanTexto.className = "texto-nombre"; //Permite que el texto se ajuste
        
    // Crear boton de Eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "✖";
    btnEliminar.className = "btn-eliminar";
    btnEliminar.onclick = function () {
        eliminarNombre(index);
    };

    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
            
    });
}

/**
 * Se elimina nombres de la lista.
 */
    function eliminarNombre(index) {
        // Eliminar el nombre de la lista
        let nombreEliminado = nombres[index];

        // Eliminar el nombre de la lista
        nombres.splice(index, 1);

        // Mostrar la alerta con el nombre eliminado
        alert(`⚠ Importante: Se ha eliminado el nombre "${nombreEliminado}".`);

        // Volver a renderizar la lista después de eliminar un nombre
        actualizarLista();
    }


/**
 * Se sortea un nombre aleatorio de la lista de participantes.
 */
    function sortearAmigo() {
        console.log("📌 Lista de nombres antes del sorteo:", nombres); // Depurar nombres
       
        if (!Array.isArray(nombres) || nombres.length === 0) {
            console.error("⚠ Importante: No hay nombres en la lista para sortear.");
            alert("⚠ Importante: No hay nombres en la lista para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * nombres.length);
        console.log(`🎲 Índice aleatorio generado: ${indiceAleatorio} (Máximo permitido: ${nombres.length - 1})`);

        // Verificar si el nombre sorteado es válido        
        if (indiceAleatorio < 0 || indiceAleatorio >= nombres.length) {
            console.error("❌ Error crítico: Índice generado fuera de rango.");
            return;
        }

        let nombreSorteado = nombres[indiceAleatorio];

        // Verificar si el nombre sorteado es válido
        if (typeof nombreSorteado !== "string" || nombreSorteado.trim() === "") {
            console.error("❌ Error: El nombre sorteado es undefined, null o vacío.");
            return;
        }
    
        console.log(`🎉 El amigo secreto sorteado y seleccionado es: "${nombreSorteado}"`);
        document.getElementById("resultado").textContent = `🎉 El amigo secreto sorteado y seleccionado es: "${nombreSorteado}"`;
       

}



