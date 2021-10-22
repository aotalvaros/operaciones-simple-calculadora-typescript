import { multiplicar } from "../../../domain/calculadora/multiplicar";
import { mockFunction } from "../../../helpers/JestHelpers";
import { redondearADosDecimales } from "../../../utils/redondearADosDecimales";

jest.mock('../../../utils/redondearADosDecimales');

describe('Debe multiplicar', () => {
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);

    test('debe multiplicar 2 numeros positivos', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(3);
        redondearADosDecimalesMock.mockReturnValueOnce(3); 
        expect(multiplicar({ numero1: 3, numero2: 3 })).toBe(9);
    });

    test('debe multiplicar 1 numero negativos y otro positivo', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(-3);
        redondearADosDecimalesMock.mockReturnValueOnce(4);
        expect( multiplicar({ numero1: -3, numero2: 4}) ).toBe(-12)
    });
    
    test('debe multiplicar valores decimales', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(5.60);
        redondearADosDecimalesMock.mockReturnValueOnce(3.70);
        expect( multiplicar({ numero1: 5.605678, numero2: 3.744567})).toBe(20.72);        
     });

     test('debe multiplicar 1 numero negativo y otro numero en 0', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(-3);
        redondearADosDecimalesMock.mockReturnValueOnce(0);
        expect( multiplicar({ numero1: -3, numero2: 0 })).toBe(-0);        
     });
});
