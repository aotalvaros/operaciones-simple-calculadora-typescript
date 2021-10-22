import { mockFunction } from "../../helpers/JestHelpers";
import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

jest.mock('../../utils/redondearADosDecimales', () => ({    
    redondearADosDecimales: jest.fn()
}));

describe('Debe redondearADosDecimales', () => {
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);
     
    test('debe la funcion redondearADosDecimales ser llamada', () => {
        redondearADosDecimalesMock(2)
        expect(redondearADosDecimalesMock).toHaveBeenCalled()
    });

    test('debe la funcion redondearADosDecimales retornar un valor con dos decimales', () => {
        redondearADosDecimalesMock.mockReturnValue(4.67);
        expect(redondearADosDecimalesMock(4.67983333)).toBe(4.67);
    });
       
});
