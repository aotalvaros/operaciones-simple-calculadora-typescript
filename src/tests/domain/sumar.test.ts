import { sumar } from '../../domain/sumar';

describe('Debe sumar', () => {

    test('debe sumar 2 valores positivos', () => {
        expect(sumar({ numero1: 2, numero2: 3 })).toBe(5);
    });

    test('debe sumar 2 valores negativos', () => {
        expect(sumar({ numero1: -2, numero2: -5 })).toBe(-7);
    });

    test('debe sumar 2 valores decimales y retornar el valor con dos decimales', () => {
        expect(sumar({ numero1: 3.30005552344, numero2: 3.63454323232 })).toBe(6.93);
    });

    test('debe sumar 2 valores en miles', () => {
        expect(sumar({ numero1: (1000000000e20), numero2: (2000000000e20) })).toBe(3e+29);
    });   
});
