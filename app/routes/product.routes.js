const { authJwt } = require("../middlewares");
const controller = require("../controllers/product.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/products", [authJwt.verifyToken], controller.allproducts);  
  app.post("/api/products/delete", [authJwt.verifyToken,], controller.deleteproducts);
  app.patch("/api/products/update", [authJwt.verifyToken, authJwt.isSELLER||authJwt.isAdmin], controller.updateproducts);
  app.post("/api/products/inserts", [authJwt.verifyToken,authJwt.isSELLER||authJwt.isAdmin], controller.addproducts); 
};