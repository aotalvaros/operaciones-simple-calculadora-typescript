import { IValorNumeros } from "../interface/IValorNumeros";

export const dividir = (valor: IValorNumeros) => {
    if (valor.numero2 === 0) {
        return 'La division por 0 no esta difinida';
    }
    return (valor.numero1.valueOf() / valor.numero2.valueOf());
};
