import { IValorNumeros } from "../../interface/IValorNumeros";
import { redondearADosDecimales } from "../../utils/redondearADosDecimales";

export const multiplicar = (valores:IValorNumeros):number => {
    return redondearADosDecimales(valores.numero1) 
         * redondearADosDecimales(valores.numero2);
};
