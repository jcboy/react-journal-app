import {types} from "../types/types";

export const startLoginEmailPassword = () => {
    return (dispatch) => {

        setTimeout(()=> {
            dispatch(login(112000, 'Papaya'))
        }, 3000)
    }
}


export const login =(uid, displayName) => (  // login action à lancer quand on aura le displaName et le uid
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
)
