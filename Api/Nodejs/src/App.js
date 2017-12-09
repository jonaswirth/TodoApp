"use strict";
var express = require("express");
var Task_1 = require("./Task");
var App = (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.json(new Task_1.default());
        });
        this.express.use('/', router);
    };
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
