
//Creamos el array
const criptos = [
    {Nombre:"Bitcoin",Simbolo:"BTC",Precio:4500,Capitalización:"850B",Cambio24h:"+2.5%"},
    {Nombre:"Ethereum",Simbolo:"ETH",Precio:3200,Capitalización:"370B",Cambio24h:"+1.8%"},
    {Nombre:"Cardano",Simbolo:"ADA",Precio:1.2,Capitalización:"40B",Cambio24h:"-0.5%"},
    {Nombre:"Binance Coin",Simbolo:"BNB",Precio:410,Capitalización:"410B",Cambio24h:"+3.1%"},
    {Nombre:"Solana",Simbolo:"SOL",Precio:100,Capitalización:"30B",Cambio24h:"+4.0%"},
];

    const tbody =document.querySelector("#criptoBody");

    function renderTable() {
        tbody.innerHTML = ""; // Borra el contenido anterior
    
        criptos.forEach(cripto => { // Recorre la lista de criptos
            const row = `<tr>
                <td>${cripto.Nombre}</td>
                <td>${cripto.Simbolo}</td>
                <td>$${cripto.Precio.toLocaleString()}</td>
                <td>${cripto.Capitalización}</td>
                <td>${cripto.Cambio24h}</td>
            </tr>`;
    
            tbody.innerHTML += row; // Agrega cada fila a la tabla
        });
    }
    
    //  Mostrar la tabla 
    document.addEventListener("DOMContentLoaded", renderTable);


