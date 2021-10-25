import { IResultadoDivision } from "../../interface/IResultadoDivision";
import { IValorNumeros } from "../../interface/IValorNumeros";
import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

export const dividir = (valores: IValorNumeros): IResultadoDivision => {   
    let resultadoDivision: IResultadoDivision = {
        resultado: 0,
        error: ''
    }; 
    if (valores.numero2 === 0) {
        resultadoDivision.error = 'La division por 0 no esta difinida';
    } else {
        resultadoDivision.resultado = redondearADosDecimales(valores.numero1) 
        / redondearADosDecimales(valores.numero2);
    };
    return resultadoDivision;           
};
