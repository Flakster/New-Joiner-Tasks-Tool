const { TestWatcher } = require("jest");
const request = require('supertest');
const app = require('../src/app');

describe('File processing', ()=>{
    test("get / should return 200 if everythig is OK", async() => {
        await request(app)
            .get('/')
            .expect(200)
    }),
    test('get /upload should return 200 if everythig is OK', async() => {
        await request(app)
            .get('/upload')
            .expect(200)
    })
})
describe('Helper string process', () => {
    test('should return an empty string', () => {

    })
})