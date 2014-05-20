function route(handle,pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  //Corre
  handle[pathname]();
}

exports.route = route;
