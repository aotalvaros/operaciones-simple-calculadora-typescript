import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { Calculadora } from '../../components/Calculadora';
import { dividir } from '../../domain/calculadora/dividir';
import { multiplicar } from '../../domain/calculadora/multiplicar';
import { restar } from '../../domain/calculadora/restar';
import { sumar } from '../../domain/calculadora/sumar';
import { mockFunction } from '../../helpers/JestHelpers';


jest.mock('../../domain/calculadora/sumar');
jest.mock('../../domain/calculadora/restar');
jest.mock('../../domain/calculadora/multiplicar');
jest.mock('../../domain/calculadora/dividir');

describe('Debe renderizar calculadora', () => {

    let wrapper = shallow( <Calculadora/> );
    beforeEach( () => { 
        wrapper =shallow(<Calculadora />);
    });
    
    test('debe sumar 2 valores', () => {    
        const sumarMock = mockFunction(sumar);
        const evento1 = {target: {value: 2}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 3}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        sumarMock.mockReturnValue(5);
        wrapper.find("#buttonHacerSumar").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado");

        expect(Number.parseFloat(resultado.text())).toBe(5);

    });

    test('debe restar 2 numeros', () => {
        const restarMock = mockFunction(restar);
        const evento1 = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 1}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        restarMock.mockReturnValue(2);
        wrapper.find("#buttonHacerResta").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado"); 

        expect(Number.parseFloat( resultado.text())).toBe(2);
    });

    test('debe multiplicar 2 numeros', () => {
        const multiplicarMock = mockFunction(multiplicar);
        const evento1 = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 2}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        multiplicarMock.mockReturnValue(9);
        wrapper.find("#buttonHacerMultiplicacion").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado"); 

        expect(Number.parseFloat( resultado.text())).toBe(9);
    });

    test('debe dividir 2 numeros', () => {
        const dividirMock = mockFunction(dividir);
        const evento1 = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 2}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        dividirMock.mockReturnValue(1.5);
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado"); 

        expect(Number.parseFloat( resultado.text())).toBe(1.5);
    });

    test('debe mostrar un error cuando se divide entre 0', () => {
        const dividirMock = mockFunction(dividir);
        const evento1 = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 0}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        dividirMock.mockReturnValue('La division por 0 no esta difinida');
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado"); 
        
        expect(resultado.text().trim()).toBe('La division por 0 no esta difinida');
    });
    

});
