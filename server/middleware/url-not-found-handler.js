/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
var path    = require("path");
module.exports = function () {
    //4XX - URLs not found
    return function customRaiseUrlNotFoundError(req, res, next) {
        res.sendFile(path.resolve(__dirname + '/../../client/index.html'), function (err) {
            if (err) {
                console.error(err);
                res.status(err.status).end();
            }
        });
    };
};