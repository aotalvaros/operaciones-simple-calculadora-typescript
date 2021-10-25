import React, { ChangeEvent, useState } from 'react'
import { sumar } from '../domain/calculadora/sumar';

export const Calculadora = () => {
    const [inputOneState, setInputOne] = useState(0);
    const [inputTwoState, setInputTwo] = useState(0);       
    const [inputResultado, setInputResultado] = useState(0);

    const performAddition = (): void =>{
        setInputResultado( sumar({ numero1: inputOneState, numero2: inputTwoState}));
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
            </div>
            <div>
                <input
                    value={inputResultado} 
                    id='InputMostrarResultado'/> 
            </div>
        </>
    );
};
