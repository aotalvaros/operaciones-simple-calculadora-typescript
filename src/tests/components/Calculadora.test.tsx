import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { Calculadora } from '../../components/Calculadora';
import { sumar } from '../../domain/calculadora/sumar';
import { mockFunction } from '../../helpers/JestHelpers';

jest.mock('../../domain/calculadora/sumar');

describe('Debe renderizar calculadora', () => {

    let wrapper = shallow( <Calculadora/> );
    beforeEach( () => { 
        wrapper =shallow(<Calculadora />);
    });
    const sumarMock = mockFunction(sumar);
    
    test('debe sumar 2 valores', () => {    
        const evento1 = {target: {value: 2}};
        wrapper.find("#inputObtienePrimerNumero").simulate('change',evento1); 
        
        const evento2 = {target: {value: 3}};
        wrapper.find('#inputObtieneSegundoNumero').simulate('change',evento2);
        
        sumarMock.mockReturnValue(5);
        wrapper.find("#buttonHacerSumar").simulate('click'); 
        const resultado = wrapper.find("#InputMostrarResultado").prop('value');

        expect(resultado).toBe(5);

    });

});
