//var path = require('path');
//
//var app = require(path.resolve(__dirname, '../server.js'));
//var ds = app.datasources.db;
//ds.discoverAndBuildModels('nationality', {schema: 'hireme'},
//    function(err, models) {
//  if (err) throw err;
//
//  models.Nationality.find(function(err, nationality) {
//    if (err) throw err;
//
//    console.log('Found:', nationality);
//
//    ds.disconnect();
//  });
//});
/* var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server.js'));
var outputPath = path.resolve(__dirname, '../../common/models');

var dataSource = app.dataSources.db;

function schemaCB(err, schema) {
    if (schema) {
        console.log("Auto discovery success: " + schema.name);
        var outputName = outputPath + '/' + schema.name + '.json';
        fs.writeFile(outputName, JSON.stringify(schema, null, 2), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputName);
            }
        });
    }
    if (err) {
        console.error(err);
        return;
    }
    return;
}
;
dataSource.discoverSchema('nationality', {schema: 'hireme'}, schemaCB);*/