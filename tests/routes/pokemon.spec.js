/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Tipo, conn } = require('../../src/db.js');

const agent = session(app);

///////////////////////////////////////////////    
    beforeEach(() => Tipo.sync({ force: true }));
  describe('GET /types', () => {
    it('response should be 200', () =>{
      return agent.get('/types').expect(200)
  })
  });
    it('should be a json', () =>{
    return agent.get('/types').expect(200).then(types=>{
    expect("Content-Type", /json/)
  })
});
