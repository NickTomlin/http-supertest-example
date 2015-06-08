var server = require('../');
var app = require('supertest')(server);
var assert = require('assert');

describe('server', function () {
  it('responds with a welcoming message', function (done) {
    app.get('/')
      .expect(200, /Hello World/, done);
  });
});

