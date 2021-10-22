import { IValorNumeros } from "../../interface/IValorNumeros";
import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

export const dividir = (valores: IValorNumeros) => {   
    if (valores.numero2 === 0) {
        return 'La division por 0 no esta difinida';
    };     
    return redondearADosDecimales(valores.numero1) 
            / redondearADosDecimales(valores.numero2);           
};
