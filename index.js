var server = require("./server");
var router = require("./router");

//Nuevamente , estamos pasando una función como parámetros, pero esto ya no es una novedad para nosotros. 
server.iniciar(router.route);
