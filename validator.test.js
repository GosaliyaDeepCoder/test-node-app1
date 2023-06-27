const {isInvalidEmail, isEmptyPayload} = require('./validator')

test('valid-email', function() {
    const testresult = {
        name: 'Dishant',
        email:'dishant@gmail.com',
        interests:'testing'
    }
    const result = isInvalidEmail(testresult)
    expect(result).toBe(false)
})

test('invalid-email', function() {
    const testresult = {
        name: 'Dishant',
        email:'dishantgmailcom',
        interests:'testing'
    }
    const result = isInvalidEmail(testresult)
    expect(result).toBe(true)
})

test('emptypaylaod', function() {
    const testresult = {}
    const result = isEmptyPayload(testresult)
    expect(result).toBe(true)
})

test('non-emptypaylaod', function() {
    const testresult = {
        name: 'Dishant',
        email:'dishant@gmail.com',
        interests:'testing'
    }
    const result = isEmptyPayload(testresult)
    expect(result).toBe(false)
})
