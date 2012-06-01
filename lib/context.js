var http = require('http'),
    path = require('path'),
    fs = require('fs'),
    rAppid = require('rAppid.js').rAppid,
    flow = require('flow.js').flow,
    isString = function(value) {
        return Object.prototype.toString.call(value) == '[object String]';
    };

module.exports = function(applicationDir, applicationFile, config, applicationUrl, callback) {
    config = config || "config.json";

    if (!applicationDir) {
        throw "applicationDir missing";
    }

    flow()
        .seq("applicationConfig", function (cb) {

            if (isString(config)) {
                fs.readFile(path.join(applicationDir, config), function (err, data) {
                    if (!err) {
                        data = JSON.parse(data);

                        data.nodeRequire = require;
                        data.baseUrl = applicationDir;
                        data.applicationUrl = applicationUrl;
                    }
                    cb(err, data);
                });
            } else {
                cb(null, config);
            }
        })
        .seq("applicationContext", function (cb) {
            rAppid.createApplicationContext(applicationFile, this.vars.applicationConfig, cb);
        })
//        .seq(function () {
////            this.vars.applicationContext.document = jsdom.jsdom('<html></html>');
//        })
        .exec(function(err, results) {
            if (err) {
                callback(err);
            } else {
                callback(err, results.applicationContext);
            }
        });
};