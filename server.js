const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3001;
const server = http.createServer(app);
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config({ path: "./config.env" });
const db = process.env.DATABASECIG_STRING.replace(
  "<password>",
  process.env.DATABASECIG_PASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB Connection Successful");
  });

server.listen(port, () => {
  console.log(`running on ${port}`);
});
