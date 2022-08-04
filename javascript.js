
let pizza1 = "vegana";
let precio1 = "$"+100;

let pizza2 = "carnivora";
let precio2 = "$"+120;

let pizza3 = "de piña";
let precio3 = "$"+80;

const button = document.querySelector(".activar");
let p = document.querySelector(".vamos-come");
/* let reset = document.querySelector('.reset');

reset.addEventListener()

 */
button.onclick = iniciarPizzeria;

let elige = "" 
const pizzas = ["vegana" , "carnivora", "de piña"]


function iniciarPizzeria(e) {
    elige = prompt("Bievenido a la Pizzeria \n A continuacion elige la pizza que quieras comprar \n Vegana - Carnivora - Piña");
    p.innerHTML = "<p> Que la disfrutes </p>"
   /*      function cena() {
            if(elige == "Vegana" || elige == "vegana"){
                alert(`Elegiste la pizza ${pizza1}, su precio es de ${precio1}`)
            }
            else if(elige == "Carnivora" || elige == "carnivora"){
                alert(`Elegiste la pizza ${pizza2}, su precio es de ${precio2}`)
            }
            else if(elige == "Piña" || elige == "piña"){
                alert(`Elegiste la pizza ${pizza3}, es en serio ? su precio es de ${precio3}`)
            }
            else{
                alert(`No tenemos esa pizza en el menú`)
            }

        }
        function mostrarCena() {
            if(elige == "Vegana" || elige == "vegana"){
                document.write(`<h2>Aqui tiene su pizza \n, la cuenta es de ${precio1}</h2>`)
            }
            else if(elige == "Carnivora" || elige == "carnivora"){
                document.write(`<h2>Aqui tiene su pizza  \n, la cuenta es de ${precio2}</h2>`)        
            }
            else if(elige == "Piña" || elige == "piña"){
                document.write(`<h2>Aqui tiene su pizza  \n, la cuenta es de ${precio3}</h2>`)        
            }
            else{
                break_
            }

        }

        function tengoDemasiadasPizzas() {
            let mas = prompt("Gracias por tu compra, tienes una pizza de regalo, te gustaria agregar una pizza extra ? \n 1 para agregar mas, 2 para terminar el pedido");

            if(mas == 1){
                pizzas.push((document.write)('<br><h3> Tambien estas llevando una pizza extra, muchas gracias !</h3>'))
            }
            else{
                document.write('<br> <h3>Aun no puedo creer que hayas rechazado mi oferta</h3>')
            }
        }

        cena();
        mostrarCena();
        tengoDemasiadasPizzas();
 */

        function cennaPizza(){
            if(elige == "Vegana" || elige == "vegana"){
                alert(`Elegiste la pizza ${pizza1}, su precio es de ${precio1}`)
            }
            else if(elige == "Carnivora" || elige == "carnivora"){
                alert(`Elegiste la pizza ${pizza2}, su precio es de ${precio2}`)
            }
            else if(elige == "Piña" || elige == "piña"){
                alert(`Elegiste la pizza ${pizza3}, es en serio ? su precio es de ${precio3}`)
            }
            else{
                alert(`No tenemos esa pizza en el menú`)
            }
        }

        cennaPizza();
        function cambiarImagenVegana(){
            if(elige == "Vegana" || elige == "vegana"){
                let cajaDePizza = document.querySelector(".cajadepizza");
                cajaDePizza.getAttribute("src");
                cajaDePizza.setAttribute("src", "https://hazlovegan.com/wp-content/uploads/2021/01/pizza-napoletana-vegana-3-1024x683.jpg") 

        }
        }
        function cambiarImagenCarnivora(){
            if(elige == "Carnivora" || elige == "carnivora"){
                let cajaDePizza = document.querySelector(".cajadepizza");
                cajaDePizza.getAttribute("src");
                cajaDePizza.setAttribute("src", "https://img.recetascomidas.com/recetas/320_240/pizza-de-ternera-picada.jpg") 

        }
        }
        function cambiarImagenPiña(){
            if(elige == "Piña" || elige == "piña"){
                let cajaDePizza = document.querySelector(".cajadepizza");
                cajaDePizza.getAttribute("src");
                cajaDePizza.setAttribute("src", "https://www.cocinayvino.com/wp-content/uploads/2020/01/45957795_m-1200x675.jpg") 

        }
        }
        if(elige == "Vegana" || elige == "vegana"){
            cambiarImagenVegana();
            let nuevoTextoVegana = document.querySelector(".textoVegana");
            nuevoTextoVegana.textContent = "Me elegiste a mi, debes ser alguien muy vegano"
        }
        if(elige == "Carnivora" || elige == "carnivora"){
            cambiarImagenCarnivora();
            let nuevoTextoCarnivora = document.querySelector(".textoCarnivora");
            nuevoTextoCarnivora.textContent = "Me elegiste a mi, debes ser alguien muy carnivoro"
        }
        if(elige == "Piña" || elige == "piña"){
            cambiarImagenPiña();
            let nuevoTextoPiña = document.querySelector(".textoPiña");
            nuevoTextoPiña.textContent = "Me elegiste a mi, debes estar algo loco"
        }
}





/* 1- Si se elige "Vegana", dar su nombre y precio
   2- Si se elige "Carnivora, dar su nombre y precio
   3- Si se elige "Piña", dar aleatoriamente pizza Vegana o Carnivora"  */


  // ${pizzas[Math.floor(Math.random() * pizzas.length)]}  Algoritmo de pizzas aleatorias


  // EVENTO DE INICIAR PIZZERIA 
