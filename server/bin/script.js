var loopback = require('loopback');
var ds = loopback.createDataSource('mysql', {
  "host": "localhose",
  "port": 3306,
  "database": "hireme",
  "username": "root",
  "password": "root"
});

// Discover and build models from INVENTORY table
ds.discoverAndBuildModels('nationality', {visited: {}, associations: true},
function (err, models) {
  // Now we have a list of models keyed by the model name
  // Find the first record from the inventory
  models.Inventory.findOne({}, function (err, inv) {
    if(err) {
      console.error(err);
      return;
    }
    console.log("\nInventory: ", inv);
    // Navigate to the product model
    // Assumes inventory table has a foreign key relationship to product table
    inv.product(function (err, prod) {
      console.log("\nProduct: ", prod);
      console.log("\n ------------- ");
    });
  });
});
