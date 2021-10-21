import { IValorNumeros } from "../interface/IValorNumeros";

export const multiplicar = (valor:IValorNumeros):Number => {
    return (valor.numero1.valueOf() * valor.numero2.valueOf())
}
