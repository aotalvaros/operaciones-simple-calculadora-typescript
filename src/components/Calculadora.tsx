import React, { ChangeEvent, useState } from 'react'
import { dividir } from '../domain/calculadora/dividir';
import { multiplicar } from '../domain/calculadora/multiplicar';
import { restar } from '../domain/calculadora/restar';
import { sumar } from '../domain/calculadora/sumar';
import { IValorNumeros } from '../interface/IValorNumeros';

export const Calculadora = () => {
    const [inputOneState, setInputOne] = useState<number>(0);
    const [inputTwoState, setInputTwo] = useState<number>(0);       
    const [inputResultado, setInputResultado] = useState<Number | String>(0);

    const valores: IValorNumeros = {
        numero1: inputOneState,
        numero2: inputTwoState
    };

    const performAddition = (): void => {
        setInputResultado(sumar(valores));
    };

    const performSubtraction = (): void => {
        setInputResultado(restar(valores));
    };

    const performMultiplication = (): void => {
        setInputResultado(multiplicar(valores))
    };
    
    const performDivision = (): void => {
        setInputResultado(dividir(valores));
    }; 

    const handleOnChangeInputOne = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const {value} = target; 
        setInputOne(Number.parseInt(value));
    };
    const handleOnChangeInputTwo = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const {value} = target; 
        setInputTwo(Number.parseInt(value));
    };

    return (
        <>
            <div>           
                <input 
                    onChange={handleOnChangeInputOne}            
                    id='inputObtienePrimerNumero'                     
                    />
                <input 
                    onChange={handleOnChangeInputTwo}            
                    id='inputObtieneSegundoNumero'
                    />
            </div>
            <div>
                <button id='buttonHacerSumar' onClick={performAddition}>
                    Sumar
                </button>
                <button id='buttonHacerResta' onClick={performSubtraction}>
                    Restar
                </button>
                <button id='buttonHacerMultiplicacion' onClick={performMultiplication}>
                    Multiplicar
                </button>
                <button id='buttonHacerDivision' onClick={performDivision}>
                    Dividir
                </button>               
            </div>
            <div>               
                 <p id='InputMostrarResultado'> 
                    {inputResultado} 
                </p>                                                         
            </div>
        </>
    );
};
