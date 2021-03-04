import {types} from '../types/types';


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout:
            return {

            }

        default :
            return state;

    }

}

/*

ce reducer va recevoir l action du login laquelle va établir
uid et name qui viennent dans le payload
 */