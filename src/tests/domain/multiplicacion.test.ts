import { multiplicar } from "../../domain/multiplicar";


describe('Debe multiplicar', () => {

    test('debe multiplicar 2 numeros positivos', () => {
        expect(multiplicar({ numero1: 3, numero2: 3 })).toBe(9);
    });

    test('debe multiplicar 1 numero negativos y otro positivo', () => {
        expect( multiplicar({ numero1: -3, numero2: 3}) ).toBe(-9)
    });
    
    test('debe multiplicar valores decimales', () => {
 
        expect( multiplicar({ numero1: 3.6002, numero2: 3.4 })).toBe(12.24068);
         
     });
})
