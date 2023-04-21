const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

const AllMyProductRoutes = require("./routes/product.routes");
AllMyProductRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));