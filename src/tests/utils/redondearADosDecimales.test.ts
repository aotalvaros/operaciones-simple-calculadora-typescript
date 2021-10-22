import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

describe('Debe redondearADosDecimales', () => {

    test('debe la funcion redondearADosDecimales retornar un valor con dos decimales', () => {
        expect(redondearADosDecimales(4.67983333)).toBe(4.68);
    });

    test('debe la funcion redondearADosDecimales retornar un valor', () => {
        expect(redondearADosDecimales(4)).toBe(4);
    });
    
});
