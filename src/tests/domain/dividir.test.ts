import { dividir } from "../../domain/dividir";

describe('Debe dividir', () => {
    
    test('debe dividir 2 valores positivos', () => {
        expect(dividir({ numero1: 3, numero2: 3})).toBe(1);
    });

    test('debe dividir 1 numero negativo y otro positivo', () => {       
        expect( dividir({ numero1: -3, numero2: 3})).toBe(-1)
    });

    test('debe dividir valores decimales', () => {
        expect( dividir({ numero1: 3.6002, numero2: 3.4 })).toBe(1.0588823529411766);       
     });

     test('debe mostrar un error cuando se divide entre 0', () => {
        expect(dividir({ numero1: 3, numero2: 0})).toBe('La division por 0 no esta difinida');
     });
     
    
})
