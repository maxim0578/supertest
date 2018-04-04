var request = require('supertest');
var expect = require('expect');

var app = require('../server/index1.js');

describe('GET /user', function() {
  it('respond with json3', function(done) {
  request(app)   //supertest takes an app object, and doesn't need our app to be listening on a port.
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect((res) =>{ //this expect belongs to supertest npm package
      //This block is assertion block. we use expect npm package for assertion
      console.log(res.body);  //output-->{name:'Aravind'}
        expect(6).toBe(6);
        console.log(res.body.name);
        expect(res.body.name).toBe("Aravind");  //this expect belongs to expect npm package
    }).end(done);
  });
});
