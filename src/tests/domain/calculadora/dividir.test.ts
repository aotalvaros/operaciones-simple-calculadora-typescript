import { dividir } from "../../../domain/calculadora/dividir";
import { mockFunction } from "../../../helpers/JestHelpers";
import { redondearADosDecimales } from "../../../utils/redondearADosDecimales";

jest.mock("../../../utils/redondearADosDecimales");

describe('Debe dividir', () => {
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);
    
    test('debe dividir 2 valores positivos', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(9);
        redondearADosDecimalesMock.mockReturnValueOnce(2);  
        expect(dividir({ numero1: 9, numero2: 2})).toBe(4.5);
    });

    test('debe dividir 1 numero negativo y otro positivo', () => {  
        redondearADosDecimalesMock.mockReturnValueOnce(-3);
        redondearADosDecimalesMock.mockReturnValueOnce(3);      
        expect( dividir({ numero1: -3, numero2: 3})).toBe(-1)
    });

    test('debe dividir valores decimales', () => {
        redondearADosDecimalesMock.mockReturnValueOnce(5.61);
        redondearADosDecimalesMock.mockReturnValueOnce(3.74);       
        expect( dividir({ numero1: 5.605678, numero2: 3.744567})).toBe(1.5);       
     });

     test('debe mostrar un error cuando se divide entre 0', () => {
        expect(dividir({ numero1: 3, numero2: 0})).toBe('La division por 0 no esta difinida');
     });    
    
});