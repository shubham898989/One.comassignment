const products = require("../models/porducts.model");

exports.allproducts =(req,res)=>{
products.find({}).then((ans) => {
  console.log(ans);
  res.status(200).send({
    message:ans
    });
  }).catch((err) => {
    console.log(err.Message);
    })

}

exports.deleteproducts =(req,res)=>
{
  let product_id = req.body.product_id;
  console.log("product_id",product_id);
  products.deleteOne({
    product_id: product_id
  }).then(()=>{
   res.status(200).send({message : "deleted successfully"})
  }).catch((err)=>{
    console.log(err.Message);
  });
}

exports.addproducts=(req,res)=>{
  let data = req.body.data;
  products.insertMany(data).then(function(){
    console.log("Data inserted")  // Success
    res.status(200).send({message : "inserted successfully"})
}).catch(function(error){
    console.log(error)      // Failure
});
}


exports.updateproducts =(req,res)=>{
  let condition = req.body.condition;
  let  updatedvalues = req.body.updatedvalues;
  products.updateMany(condition, 
    updatedvalues, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
      res.status(200).send({message : "updated successfully"})
    }
});
}