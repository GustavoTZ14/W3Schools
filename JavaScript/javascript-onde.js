/* A tag <script>

    Em HTML, o código JavaScript é inserido entre as tags <script>e </script>.

    <script>
        document.getElementById("demo").innerHTML = "Meu primeiro JavaScript";
    </script>

    Funções e eventos JavaScript
    
    Um javascript function é um bloco de código JavaScript que pode ser executado
    quando "chamado".
    
    Por exemplo, uma função pde ser chamada quando um evento ocorre, como quando
    o usuário clica em um botão.

    JavaScript em <head> ou <body>

    Você pode colocar qualquer número de scripts em um documento HTML.
    Os scripts podem ser colocados na seção <body> ou na <head> seção de uma 
    página HTML, ou em ambos.
*/

/*
    <!DOCTYPE html>
    <html>
    <head>
        <script>
        function myFunction() {
            document.getElementById("demo").innerHTML = "Paragraph changed.";
        }
        </script>
    </head>
    <body>
        <h2>Demo JavaScript in Head</h2>

        <p id="demo">A Paragraph</p>
        <button type="button" onclick="myFunction()">Try it</button>

    </body>
    </html>
*/

/*
    JavaScript em <body>

    Neste exemplo, um JavaScript function é colocado na <body> seção de uma HTML

    A função é invocada (chamada) quando um botão é clicado
*/

/*
    <!DOCTYPE html>
    <html>
    <body>

        <h2>Demo JavaScript in Body</h2>

        <p id="demo">A Paragraph</p>

        <button type="button" onclick="myFunction()">Try it</button>

        <script>
            function myFunction() {
                document.getElementById("demo").innerHTML = "Paragraph changed.";
            }
        </script>

    </body>
    </html>
*/

/*
    JavaScript externo

    Os scripts também podem ser colocados em arquivos externos.
*/

// arquivo externo: myScript.js
function myFunction() {
    document.getElementById("demo").innerHTML = "Paragrafo modificado";
}

/*
    Para usar um script externo, coloque o nome do arquivo de script no src
    atributo (source) de uma <script>tag:

    <script src="myScript.js"></script>
*/

// Scripts externos não podem conter <script>tags.