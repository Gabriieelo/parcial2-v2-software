
function agregarTarea() {
    const input = document.getElementById("nuevaTarea");
    const texto = input.value.trim();

    if (texto === "") {
        alert("Ingresá una tarea");
        return;
    }

    const tarea = document.createElement("li");
    tarea.textContent = texto + " ✓";

    tarea.onclick = function() {
        tarea.remove();
    };

    document.getElementById("listaTareas").appendChild(tarea);
    input.value = "";
}
