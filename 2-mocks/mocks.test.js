const { login } = require('./mocks')
jest.mock('./getUser', () => {
    return {
        getUser: (login) => {
            if (login === 'exist-ok') {
                return { login, password: 'ok' }
            } else if (login === 'exist-wrong-pass'){
                return {login, password: 'bad password'}
            }
        }
    }
})
describe('login function', () => {
    it('login', async () => {
        const result = await login('exist-ok', 'ok')
        expect(result).toBe(200)
    })
    it('wrong password', async () => {
        const result = await login('exist-wrong-pass', 'ok')
        expect(result).toBe(401)
    })
})