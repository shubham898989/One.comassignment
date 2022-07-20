const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const dbConfig = require("./app/config/db.config");
console.log(dbConfig);
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "Retail-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RetailModule." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/product.routes")(app)
// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "ADMIN"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'ADMIN' to roles collection");
      });
      new Role({
        name: "SELLER"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'SELLER' to roles collection");
      });

      new Role({
        name: "SUPPORTER"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'SUPPORTER' to roles collection");
      });
	        new Role({
        name: "CUSTOMER"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'CUSTOMER' to roles collection");
      });
    }
  });
}