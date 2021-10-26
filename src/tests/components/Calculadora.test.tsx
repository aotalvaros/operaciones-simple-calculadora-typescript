import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { Calculadora } from '../../components/Calculadora';
import { dividir } from '../../domain/calculadora/dividir';
import { multiplicar } from '../../domain/calculadora/multiplicar';
import { restar } from '../../domain/calculadora/restar';
import { sumar } from '../../domain/calculadora/sumar';
import { mockFunction } from '../../helpers/JestHelpers';
import { IResultadoDivision } from '../../interface/IResultadoDivision';


jest.mock('../../domain/calculadora/sumar');
jest.mock('../../domain/calculadora/restar');
jest.mock('../../domain/calculadora/multiplicar');
jest.mock('../../domain/calculadora/dividir');

describe('Debe renderizar calculadora', () => {

    let wrapper = shallow( <Calculadora/> );
    beforeEach( () => { 
        wrapper =shallow(<Calculadora />);
    });

    let dividirMock = mockFunction(dividir);
    
    test('debe sumar 2 valores', () => {    
        const sumarMock = mockFunction(sumar);
        const eventoUno = {target: {value: 2}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 3}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
        
        sumarMock.mockReturnValue(5);
        wrapper.find("#buttonHacerSumar").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado");

        expect(Number.parseFloat(resultado.text())).toBe(5);

    });

    test('debe restar 2 numeros', () => {
        const restarMock = mockFunction(restar);
        const eventoUno = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 1}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
        
        restarMock.mockReturnValue(2);
        wrapper.find("#buttonHacerResta").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado"); 

        expect(Number.parseFloat(resultado.text())).toBe(2);
    });

    test('debe multiplicar 2 numeros', () => {
        const multiplicarMock = mockFunction(multiplicar);
        const eventoUno = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 2}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
        
        multiplicarMock.mockReturnValue(9);
        wrapper.find("#buttonHacerMultiplicacion").simulate('click'); 
        const resultado = wrapper.find("#pMostrarResultado"); 

        expect(Number.parseFloat(resultado.text())).toBe(9);
    });

    test('debe dividir 2 numeros', () => {
        const eventoUno = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 2}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
                
        dividirMock.mockReturnValue({ resultado: 1.5, error: '' });
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultados = wrapper.find("#pMostrarResultado"); 

        expect(Number.parseFloat(resultados.text())).toBe(1.5);
    });

    test('debe mostrar un error cuando se divide entre 0', () => {
        const eventoUno = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 0}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
        
        const resultadoDivision: IResultadoDivision 
            = { resultado: 0, error: 'La division por 0 no esta difinida' };
        dividirMock.mockReturnValue(resultadoDivision);
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultados = wrapper.find("#pMostarError"); 

        expect(resultados.text()).toBe('La division por 0 no esta difinida');
    });

    test('no debe mostar el parrafo del error cuando la funcion dividir retorna un numero', () => {
        const eventoUno = {target: {value: 3}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',eventoUno); 
        
        const eventoDos = {target: {value: 2}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',eventoDos);
        
        const resultadoDivision: IResultadoDivision 
            = { resultado: 1.5, error: ' ' };
        dividirMock.mockReturnValue(resultadoDivision);
        wrapper.find("#buttonHacerDivision").simulate('click'); 
        const resultados = wrapper.find("#pMostarError"); 

        expect(resultados.text()).toBe(' ');
    });

});
