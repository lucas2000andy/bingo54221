
var jugarNumero = [0];

var cont = 0;

var crearCartilla =0;

var tableros = document.getElementById('container');

var mostarNumeros = document.getElementById('number');

var cartisbo = document.getElementById('cartis');
pausar=false;

var tablas = {

        filas: 3,
        columnas: 15,
        crear: function() {
            
            for (let i = 1; i < 91; i++) {
                var celda = document.createElement('div');
                celda.className = 'celdas';
                celda.id = i;
                celda.appendChild(document.createTextNode(i));
                tableros.appendChild(celda);
            }

        },

        jugar:setInterval (function para(x) {
            if (x==true) {
            cont++;
            var numero = Math.floor(Math.random() * 90) + 1;
            var marcar = document.getElementById(numero);
            var verificar;
            jugarNumero.forEach(function(element, index) {
                if (numero == element) {
                    verificar = element
                }
            });
            console.log(verificar);
            if (cont < 91) {
                if (verificar == undefined) {

                    marcar.style = "background-color : orange";
                    jugarNumero.push(numero);

                    mostarNumeros.innerHTML = numero;

                } else {
                    cont--;
                    this.jugar;
                }
            } else {
                
                document.getElementById("id_button").disabled = true;
            }
        } else {
             clearInterval(this.jugar);   
        }  
        },1000,true),
        crearCartillas: function() {

            var valor = document.getElementById("cartillasNumero").value;
            do {

                var nuevaCart = document.createElement("div");
                nuevaCart.className = "Cartilla";
                nuevaCart.id = "cartilla_" + crearCartilla;
                nuevaCart.style = "border: 5px solid #456852";

                for (let j = 1; j < 28; j++) {
                    var celda = document.createElement('div');
                    celda.className = 'celdas';
                    //celda.id = "cosa" + j;

                    celda.appendChild(document.createTextNode(j));
                    nuevaCart.appendChild(celda);
                }

                cartisbo.appendChild(nuevaCart);

                cartisbo.appendChild(document.createElement("br"));
                
                cartisbo.appendChild(document.createElement("br"));
                crearCartilla++;

            } while (crearCartilla < valor)
        }
    }
