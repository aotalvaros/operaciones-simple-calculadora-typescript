import { redondearADosDecimales } from "../utils/redondearADosDecimales";

export const obtenerDosDecimales = (numeroDecimal: number) => {

    return new Promise( (resolves, rejects) =>{

        setTimeout(() => {
            const respuesta = redondearADosDecimales(numeroDecimal);
            if (respuesta) {
                resolves(respuesta);
            } else {
                rejects( 'No se puede redondear el numero' );
            };
        }, 1500);
    });
};
