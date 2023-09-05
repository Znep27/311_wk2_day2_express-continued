const products = require("../data/products")

const list = (req, res) => {
    res.json(products);
 }
  
const show = (req, res) => {
    let id = req.params.id;
  
    let found = products.find(function (element) {
      if (element._id == id) {
        return true;
      }
    });
  
    res.json(found);
  }
  
  let productsCounter = 11;
  const create = (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
  
    let newEntry = {
      _id: productsCounter,
      name: name,
      description: description,
    };
  
    productsCounter++;
    products.push(newEntry);
  };
  
  module.exports = { list, show, create };