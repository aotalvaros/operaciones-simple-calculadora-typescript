import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

describe('Debe redondearADosDecimales', () => {

    test('debe redondear a dos decimales', () => {
        expect(redondearADosDecimales(4.67983333)).toBe(4.68);
    });

    test('debe retornar un numero entero, en caso de no tener decimales', () => {
        expect(redondearADosDecimales(4)).toBe(4);
    });

    test('debe redondear a dos decimales por encima, cuando el tercer decimal es mayor a cuatro', () => {
        expect(redondearADosDecimales(4.6759)).toBe(4.68);
    }); 

    test('no debe redondear a dos decimales cuando el tercer decimal es menor a cinco', () => {
        expect(redondearADosDecimales(4.674)).toBe(4.67);
    });     
});
