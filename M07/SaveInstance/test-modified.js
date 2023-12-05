var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");

var clientSchema = mongoose.Schema({
  lastname: String,
  firstname: String,
  address: String
});

var Client = mongoose.model("clients", clientSchema);

// create the document in memory
var c = new Client({ lastname: "Clinton", firstname: "Bill", address: "Washington" });
console.log("Before the save() statement");

// save the document in the database (clients collection)
c.save()
  .then(() => {
    console.log("The client is inserted into the collection");
  })
  .catch((err) => {
    console.error("Error saving the client:", err);
  })
  .finally(() => {
    console.log("After the save() statement");
    // You can optionally close the mongoose connection here if needed.
    mongoose.connection.close();
  });
