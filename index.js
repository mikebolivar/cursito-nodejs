var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//Creamos objeto handler
var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);