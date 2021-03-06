var express = require("express");
var router = express.Router();
var os = require("os");

var VERSION = "1.2";

router.get("/", function(req, res) {
    var response = "<h1>Hello Kubernetes</h1>" +
                    "<h3>Serving from host: " + os.hostname() + "</h3>"  +
                    "<h3>Version: " + VERSION + "</h3>";
    res.send(response);
});

module.exports = router;