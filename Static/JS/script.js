const optionMenu = document.querySelector("#option_menu")
const button = document.querySelector("#button_stargame")

button.addEventListener('click', function(event) {
    if (optionMenu.value == "animal") {
        alert("ciao")
    } else if (optionMenu.value == "career") {
        alert("hai messo come batutta la carriera")
    } else if (optionMenu.value == "celebrity") {
        alert("prova")
    }
})