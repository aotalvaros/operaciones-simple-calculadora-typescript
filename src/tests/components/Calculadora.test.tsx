import '@testing-library/jest-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import { Calculadora } from '../../components/Calculadora';
import { dividir } from '../../domain/calculadora/dividir';
import { multiplicar } from '../../domain/calculadora/multiplicar';
import { restar } from '../../domain/calculadora/restar';
import { sumar } from '../../domain/calculadora/sumar';
import { mockFunction } from '../../helpers/JestHelpers';
import { IResultadoDivision } from '../../interface/IResultadoDivision';
import Swal from 'sweetalert2';

jest.mock('../../domain/calculadora/sumar');
jest.mock('../../domain/calculadora/restar');
jest.mock('../../domain/calculadora/multiplicar');
jest.mock('../../domain/calculadora/dividir');
jest.mock('sweetalert2');

describe('Debe renderizar calculadora', () => {
    
    let wrapper: ShallowWrapper;
    let dividirMock: any;
    let sweetAlertMock: any;
    
    beforeAll(() => { 
        wrapper = shallow(<Calculadora />);
        dividirMock = mockFunction(dividir);
        sweetAlertMock = mockFunction(Swal.fire);
    });
    
    test('debe sumar 2 valores', () => {    
        const sumarMock = mockFunction(sumar);
        wrapper.find("#inputObtienePrimerNumero").simulate('change', { target: { value: 2 } }); 
        wrapper.find('#inputObtieneSegundoNumero').simulate('change', { target: { value: 3 } });       
        sumarMock.mockReturnValue(5);   
        
        wrapper.find("#buttonHacerSumar").simulate('click');
        const resultado = wrapper.find("#pMostrarResultado");
        
        expect(Number.parseFloat(resultado.text())).toBe(5);
    });

    test('debe restar 2 numeros', () => {
        const restarMock = mockFunction(restar);
        wrapper.find("#inputObtienePrimerNumero").simulate('change', { target: { value: 3 } }); 
        wrapper.find('#inputObtieneSegundoNumero').simulate('change', { target: { value: 1 } });       
        restarMock.mockReturnValue(2);

        wrapper.find("#buttonHacerResta").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado");

        expect(Number.parseFloat(resultado.text())).toBe(2);
    });

    test('debe multiplicar 2 numeros', () => {
        const multiplicarMock = mockFunction(multiplicar);
        wrapper.find("#inputObtienePrimerNumero").simulate('change', { target: { value: 3 } });  
        wrapper.find('#inputObtieneSegundoNumero').simulate('change', { target: { value: 2 } });      
        multiplicarMock.mockReturnValue(9);

        wrapper.find("#buttonHacerMultiplicacion").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado");

        expect(Number.parseFloat(resultado.text())).toBe(9);
    });

    test('debe dividir 2 numeros', () => {
        wrapper.find("#inputObtienePrimerNumero").simulate('change', { target: { value: 3} });        
        wrapper.find('#inputObtieneSegundoNumero').simulate('change', { target: { value: 2} });               
        dividirMock.mockReturnValue({ resultado: 1.5, error: '' });
        
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado");

        expect(Number.parseFloat(resultado.text())).toBe(1.5);
    });

    test('debe mostrar un error cuando se divide entre 0', () => {
        const mensajeError: string = 'La divisi\u00f3n por 0 no esta difinida';
        const resultadoDivision: IResultadoDivision 
            = { resultado: 0, error: mensajeError };
        wrapper.find("#inputObtienePrimerNumero").simulate('change', { target: { value: 3 } }); 
        wrapper.find('#inputObtieneSegundoNumero').simulate('change', { target: { value: 0 } });
        dividirMock.mockReturnValue(resultadoDivision);
        
        wrapper.find("#buttonHacerDivision").simulate('click');

        expect(sweetAlertMock).toHaveBeenCalledWith('Divisi\u00f3n indeterminada', mensajeError, 'error');
        expect(sweetAlertMock).toHaveBeenCalled();
    });

    test('no debe mostrar error cuando este vacio', () => {
        wrapper.find("#inputObtienePrimerNumero").simulate('change',{ target: { value: 3 } }); 
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',{ target: { value: 4 } });      
        const resultadoDivision: IResultadoDivision 
            = { resultado: 0.75, error: '' };
        dividirMock.mockReturnValue(resultadoDivision);

        wrapper.find("#buttonHacerDivision").simulate('click');        

        expect(sweetAlertMock).not.toHaveBeenCalled();       
    });
});
