import { IValorNumeros } from "../interface/IValorNumeros"
import { redonderNumero } from "../redondearNumero";

export const sumar = (valores: IValorNumeros ): Number  => {   
   const {valor1,valor2} = redonderNumero(valores);
   return valor1.valueOf() + valor2.valueOf()
};
