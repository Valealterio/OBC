const boton = document.getElementById("btn")

boton.addEventListener("click", () => {
    alert("click en el botón")
})

$("btn").click(() =>{ 
    $("btn").hide()
    console.log("Hola, estoy utilizando jQuery")
})