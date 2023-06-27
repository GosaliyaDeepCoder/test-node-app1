const {app, server} = require('./server')
const request = require('supertest')

test('test request with valid payload', async function() {
    const testpaylaod= {
        name: 'test name',
        email:'test@gmail.com',
        interests:'testing'
    }
    const response = await request(app)
        .post('/update-profile')
        .send(testpaylaod)

    console.log(response.body)
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('info')
    expect(response.body.info).toBe('User profile data updated succesfully')

    server.close()
})

test('test request with invalid payload', async function() {
    const testpaylaod= {}
    const response = await request(app)
        .post('/update-profile')
        .send(testpaylaod)

    console.log(response.body)
    expect(response.body).toHaveProperty('error')
    expect(response.body.error).toBe("Empty payload Couldn't update the user profile data")

    server.close()
})


