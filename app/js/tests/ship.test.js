const { ceno } = require('../script');

test('ceno', () => {
    expect(ceno.health).toBe({
        name: 'ceno',
        health: 100
    })
})

test('ceno', () => {
    expect(ceno.hit()).toBe({
        name: 'ceno',
        health: 99
    })
})