import { IValorNumeros } from "../interface/IValorNumeros"

export const sumar = (valores: IValorNumeros ): Number  => {    
   return (valores.numero1.valueOf() + valores.numero2.valueOf())
}
