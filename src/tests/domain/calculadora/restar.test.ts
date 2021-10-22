import { restar } from "../../../domain/calculadora/restar";
import { mockFunction } from "../../../helpers/JestHelpers";
import { redondearADosDecimales } from '../../../utils/redondearADosDecimales';

jest.mock('../../../utils/redondearADosDecimales.ts', () => ({    
    redondearADosDecimales: jest.fn()
}));

describe('Debe restar', () => {
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);

    test('debe restar 2 valores', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(5);
        redondearADosDecimalesMock.mockReturnValueOnce(2);  
       expect(restar({ numero1: 5, numero2: 2 })).toBe(3); 
    });
    
    test('debe restar valores decimales', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(5.63);
        redondearADosDecimalesMock.mockReturnValueOnce(3.23); 
        expect(restar({ numero1: 5.63675, numero2: 3.23575})).toBe(2.40);
    });

    test('debe restar 2 valores en miles', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(1000000000e20);
        redondearADosDecimalesMock.mockReturnValueOnce(2000000000e20);
        expect(restar({ numero1: (1000000000e20), numero2: (2000000000e20) })).toBe(-1e+29);
    });
      
});
