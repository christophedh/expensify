const add = (a, b) => a + b
const generateGreeting = name => `Hello ${name}`
test('add two number', () => {
    const result = add(1, 4)
    expect(result).toBe(5)
})

test('test greeting', () => {
    const greeting = generateGreeting('christophe')

    expect(greeting).toBe('Hello christophe')
})

test('test greeting without name', () => {
    const greeting = generateGreeting('')

    expect(greeting).toBe('Hello ')
})
