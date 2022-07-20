const mongoose = require("mongoose");
const products = mongoose.model(
  "products",
  new mongoose.Schema({
	      product_id: String,
          brand_id: String,
         category_id: String,
          model_year: String,
         list_price: String
  })
);

module.exports = products;
