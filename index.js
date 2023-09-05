const express = require("express");

const commentsRouter = require("./routes/comments")
const contactsRouter = require("./routes/contacts")
const productsRouter = require("./routes/products")
const vehiclesRouter = require("./routes/vehicles")

const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4002;

app.use(express.json())
app.use(express.static('public'))
app.use(commentsRouter)
app.use(contactsRouter)
app.use(productsRouter)
app.use(vehiclesRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
