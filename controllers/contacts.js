const contacts = require("../data/contacts")

const list = (req, res) => {
    res.json(contacts);
  }
  
const show = (req, res) => {
    let id = req.params.id;
  
    let found = contacts.find(function (element) {
      if (element._id == id) {
        return true;
      }
    });
  
    res.json(found);
  }

  let contactsCounter = 6;
  const create = (req, res) => {
    let name = req.body.name;
    let occupation = req.body.occupation;
    let avatar = req.body.avatar;
  
    let newEntry = {
      _id: contactsCounter,
      name: name,
      occupation: occupation,
      avatar: avatar,
    };
  
    contactsCounter++;
    contacts.push(newEntry);
  };
  
  module.exports = { list, show, create };