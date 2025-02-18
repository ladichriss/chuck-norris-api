const optionMenu = document.querySelector("#option_menu")
const button = document.querySelector("#button_stargame")
const battuta = document.querySelector(".joke")

button.addEventListener('click', function(event) {
    if (optionMenu.value == "animal") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=animal").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "career") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=career").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "celebrity") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=celebrity").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "dev") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=dev").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "explicit") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=explicit").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "fashion") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=fashion").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "food") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=food").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "history") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=history").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "money") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=money").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "movie") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=movie").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "music") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=music").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "political") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=political").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "religion") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=religion").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "science") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=science").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "sport") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=sport").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "travel") {
        let battuta = fetch("https://api.chucknorris.io/jokes/random?category=travel").then(
            function(response) {
                return response.json()
            }
        ).then(
            function (data) {
                document.querySelector(".joke").textContent = data.value
            }
        ).catch(
            function (errorsans) {
                console.log(errorsans)
            }
        )
    } else if (optionMenu.value == "-") {
        document.querySelector(".joke").textContent = "Seleziona una categoria per mostrare una battuta"
    }
})