const { sum } = require('./basic')

describe('sum function', () => {
    it('1 + 2 = 3 ok', () => {
        const result = sum(1, 2)
        expect(result).toBe(3)
    })
    it('bad args throw error', () => {
        expect(() => { sum('a', null) }).toThrow();
    })
})