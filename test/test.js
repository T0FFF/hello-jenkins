var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world 2' response body, got 'hello world 2 + CI + CD', done);
  });
});
