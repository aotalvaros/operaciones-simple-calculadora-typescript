import React, { ChangeEvent, useEffect, useState } from 'react'
import { dividir } from '../domain/calculadora/dividir';
import { multiplicar } from '../domain/calculadora/multiplicar';
import { restar } from '../domain/calculadora/restar';
import { sumar } from '../domain/calculadora/sumar';
import { IResultadoDivision } from '../interface/IResultadoDivision';
import { IValorNumeros } from '../interface/IValorNumeros';
import '../style/Calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

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

    useEffect(() => { 
        if (error!== '') {
            swal("Error", error, "error");                        
        };
        return () =>{
            limpiarError();
        }; 
    },[error]);

    return (
        <div className="App">
            <div className="calc-wrapper ">
                <img
                    className="img-responsive logo-img" alt=""
                    src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media/bloque2071.png"
                    /> 
                <div className='row'>
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

                <div className='row'>
                    <p id='pMostrarResultado'> 
                        {(isNaN(inputResultado) ? 0 : inputResultado)} 
                    </p>
                </div>

                <div className='row' id='group1' >
                    <button className='button btn btn-success' 
                            id='buttonHacerSumar'  
                            onClick={performAddition}
                            >
                        Sumar
                    </button>

                    <button className='button btn btn-success'
                            id='buttonHacerResta' 
                            onClick={performSubtraction}
                            >
                        Restar
                    </button>
                </div>

                <div className='row' id='group2' >
                    <button className='button btn btn-success'
                            id='buttonHacerMultiplicacion' 
                            onClick={performMultiplication}
                            >
                        Multiplicar
                    </button>
                    
                    <button className='button btn btn-success' 
                            id='buttonHacerDivision' 
                            onClick={performDivision}
                            >
                        Dividir
                    </button>               
                </div>                                  
           
            </div>
        </div>
    );
};
