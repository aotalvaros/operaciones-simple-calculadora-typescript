import React, { ChangeEvent, useState } from 'react'
import { dividir } from '../domain/calculadora/dividir';
import { multiplicar } from '../domain/calculadora/multiplicar';
import { restar } from '../domain/calculadora/restar';
import { sumar } from '../domain/calculadora/sumar';
import { IResultadoDivision } from '../interface/IResultadoDivision';
import { IValorNumeros } from '../interface/IValorNumeros';

export const Calculadora = () => {
    const [inputOneState, setInputOne] = useState<number>(0);
    const [inputTwoState, setInputTwo] = useState<number>(0);       
    const [inputResultado, setInputResultado] = useState<number>(0);
    const [error, setError] = useState<string>('');

    const valores: IValorNumeros = {
        numero1: inputOneState,
        numero2: inputTwoState
    }; 

    const performAddition = (): void => {
        setInputResultado(sumar(valores));
        limpiarError();
    };

    const performSubtraction = (): void => {
        setInputResultado(restar(valores));
        limpiarError();
    };

    const performMultiplication = (): void => {
        setInputResultado(multiplicar(valores));
        limpiarError();
    };

    const performDivision = (): void => {
        const { resultado, error }: IResultadoDivision = dividir(valores);       
        setInputResultado(resultado);
        setError(error);      
    }; 

    const handleOnChangeInputOne = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const {value} = target; 
        setInputOne(Number.parseInt(value));
    };
    const handleOnChangeInputTwo = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const {value} = target; 
        setInputTwo(Number.parseInt(value));
    };

    const limpiarError = (): void => {
        setError('');
    };

    return (
        <>
            <div>           
                <input 
                    type='number'
                    placeholder='0'
                    onChange={handleOnChangeInputOne}            
                    id='inputObtienePrimerNumero'                     
                    />
                <input 
                    type='number'
                    placeholder='0'
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
                <p id='pMostrarResultado'> 
                    {(isNaN(inputResultado) ? 0 : inputResultado)} 
                </p>
                {   error !== '' &&
                    <p id='pMostarError' style = {{color:'red'}}>{ error }</p>                                                                        
                }                          
            </div>
        </>
    );
};
