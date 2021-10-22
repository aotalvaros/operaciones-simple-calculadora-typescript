import { sumar } from '../../../domain/calculadora/sumar';
import { mockFunction } from '../../../helpers/JestHelpers';
import { redondearADosDecimales } from '../../../utils/redondearADosDecimales';

jest.mock('../../../utils/redondearADosDecimales.ts', () => ({    
    redondearADosDecimales: jest.fn()
}));

describe('Debe sumar', () => {
    
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);
    
    test('debe sumar 2 valores positivos', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(2);
        redondearADosDecimalesMock.mockReturnValueOnce(3);       
        expect(sumar({ numero1: 2, numero2: 3 })).toBe(5);       
    });

    test('debe sumar 2 valores negativos', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(-2);
        redondearADosDecimalesMock.mockReturnValueOnce(-5);
        expect(sumar({ numero1: -2, numero2: -5 })).toBe(-7);
    });

    test('debe sumar 2 valores decimales y retornar el valor con dos decimales', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(3.30);
        redondearADosDecimalesMock.mockReturnValueOnce(3.63);
        expect(sumar({ numero1: 3.30005552344, numero2: 3.63454323232 })).toBe(6.93);
    });

    test('debe sumar 2 valores en miles', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(1000000000e20);
        redondearADosDecimalesMock.mockReturnValueOnce(2000000000e20);
        expect(sumar({ numero1: (1000000000e20), numero2: (2000000000e20) })).toBe(3e+29);
    });
   
});
