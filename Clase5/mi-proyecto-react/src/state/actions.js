import {INCREMENTAR_CONTADOR, DECREMENTAR_CONTADOR} from "./types"

export const accionIncrementar = paso => {
    console.log('ACCION -> accionIncrementar', paso)

    return {
        type: INCREMENTAR_CONTADOR,
        paso
    }
}

export const accionDecrementar = paso => {
    console.log('ACCION -> accionDecrementar', paso)

    return {
        type: DECREMENTAR_CONTADOR,
        paso
    }
}