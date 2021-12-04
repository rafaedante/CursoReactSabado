import {INCREMENTAR_CONTADOR, DECREMENTAR_CONTADOR} from "./types"

export const contadorReducer = (state, action) => {

    console.log('REDUCER -> contadorReducer', state, action)

    switch(action.type) {
        case INCREMENTAR_CONTADOR:
            return {
                contador : state.contador + action.paso
            }

        case DECREMENTAR_CONTADOR:
            return {
                contador : state.contador - action.paso
            }

        default:
            return state
    }
}