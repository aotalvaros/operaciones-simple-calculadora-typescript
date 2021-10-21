import { restar } from '../../domain/restar';

describe('Debe restar', () => {
    
    test('debe restar 2 valores', () => {
       expect(restar({ numero1: 5, numero2: 2 })).toBe(3); 
    });
    
    test('debe restar valores decimales', () => {
        expect(restar({ numero1: 3.6002, numero2: 3.4})).toBe(0.20020000000000016);
    });

    test('debe restar 2 valores en miles', () => {
        expect(restar({ numero1: (1000000000e20), numero2: (2000000000e20) })).toBe(-1e+29);
    });
      
});
