/*

Promise
    -pending-> in corso
    -rejected -> richiesta fallita (status code comincia con 4 o 5)
    -fulfilled -> richiesta andata bene (status code comincia con 2 o 3)

        
*/
//qui faccio delle cose

let p = fetch("https://api.chucknorris.io/jokes/random?category=").then(
    function(response){
        console.log(response)
        //Qui codice che verrà eseguito quando la promise è fulfilled
        return response.json() // ritorna un'altra promise perciò subito sotto faccio un altro then
    }
).then(
    function(data){
        console.log(data)
        document.querySelector("body").innerHTML = data.value;

        //Qui ho a disposizione i dati veri e propri
    }
).catch(
    function(errorsans){
        console.err(errorsans)
        //Qui codice che verrà eseguito quando la promise è rejected
    }
)

console.log(p)

    // p avrà stato pending
    // fetch NON è bloccante

    //qui faccio altre cose