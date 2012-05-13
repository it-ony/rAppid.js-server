var rExtractor = /^([^=]+?)(?:=(.*))$/;

var QueryString = {

    parse: function(queryString) {

        var params = {};

        if (queryString) {
            var queryParts = queryString.split("&");

            for (var i = 0; i < queryParts.length; i++) {
                var keyValue = rExtractor.exec(queryParts[i]);
                if (keyValue) {
                    params[keyValue[1]] = keyValue[2] ? decodeURIComponent(keyValue[2]) : null;
                } else {
                    throw("Query parameter '" + queryParts[i] + "' cannot be parsed,");
                }
            }
        }

        return params;

    }
};

module.exports.QueryString = QueryString;