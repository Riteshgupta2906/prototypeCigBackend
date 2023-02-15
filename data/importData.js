const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const Teams = require("../model/team");

const fs = require("fs");
dotEnv.config({ path: "./../config.env" });
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

const teamsData = JSON.parse(
  fs.readFileSync(`${__dirname}/teams.json`, "utf-8")
);

//importing the team data
const importData = async () => {
  try {
    await Teams.create(teamsData);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Teams.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
