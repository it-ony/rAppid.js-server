var should = require('chai').should();

var QueryString = require(__dirname + '/../lib/QueryString').QueryString;

describe('queryString', function () {

    describe('#parse', function () {

        it('empty query string', function () {

            var params = QueryString.parse();
            should.exist(params) && Object.keys(params).length.should.eql(0);

        });

        it('one value', function () {

            var params = QueryString.parse("foo=bar");
            should.exist(params);
            params.should.have.property('foo').eql('bar');
            Object.keys(params).length.should.eql(1);
        });

        it('key only', function () {

            var params = QueryString.parse("foo=");
            should.exist(params);
            params.should.have.property('foo').eql(null) &&
                Object.keys(params).length.should.eql(1);
        });


    });


});