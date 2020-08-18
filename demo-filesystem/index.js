
const fs = require("fs");

fs.mkdir("./teste", function(){
    console.log("Pasta 'teste' criada com sucesso!");
});

fs.writeFile("./teste/arq1.txt", "blz", function (){
    console.log("arquivo criado com sucessso dentro da pasta 'teste'")
})

fs.readFile("./teste/arq1.txt", function(err, data) {
    console.log("consteúdo do arquivo: "+ data.toString());
})