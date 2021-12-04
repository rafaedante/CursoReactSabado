import {createStore} from 'redux'

import {contadorReducer} from './reducers'

export const store =  createStore(
    //reducer
    contadorReducer,

    //state
    {
        contador: 123
    }

)