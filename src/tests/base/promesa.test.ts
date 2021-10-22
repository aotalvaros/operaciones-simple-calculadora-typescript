import { obtenerDosDecimales } from "../../base/promesa";
import { mockFunction } from "../../helpers/JestHelpers";
import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

jest.mock('../../utils/redondearADosDecimales', () => ({    
    redondearADosDecimales: jest.fn()
}));

describe('Prueba con Promesas', () => {
    const redondearADosDecimalesMock = mockFunction(redondearADosDecimales);

    test('debe retornar un numero a 2 decimal', (done) => {
        redondearADosDecimalesMock.mockReturnValueOnce(10.35);
        obtenerDosDecimales(10.3455)
            .then((redondearDosDecimales) =>{
                expect(redondearDosDecimales).toBe(10.35);
                done();
            });      
    });

    test('debe retornar un error si no convierte el numero a 2 decimales', (done) => {       
        obtenerDosDecimales(0)
            .catch((error) =>{
                expect(error).toBe('No se puede redondear el numero');
                done();
            });  
    });

    test('should resolves', () => {  
        redondearADosDecimalesMock.mockReturnValueOnce(10.35);  
        return expect(obtenerDosDecimales(10.3455)).resolves.toBe(10.35)
    });
    
    test('should rejects', () => {
        return expect(obtenerDosDecimales(0)).rejects.toBe('No se puede redondear el numero')
    });   
       
});
