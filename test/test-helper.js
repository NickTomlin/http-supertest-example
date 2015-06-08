var server = require('../');
var supertest = require('supertest')

// attach a helpful global to easily hit our server
// with a request in our tests
global.app = supertest(server);
