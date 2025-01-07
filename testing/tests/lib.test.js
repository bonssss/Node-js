const lib = require('../lib')

test('result is +ve if number is +ve', () => { 
const result= lib.absolute(2)
expect(result).toBe(2)
 })

 test('result is +ve if number is -ve', () => { 
    const result= lib.absolute(-2)
    expect(result).toBe(2)
     })

     test('result is 0 if number is 0', () => { 
        const result= lib.absolute(0)
        expect(result).toBe(0)
         })