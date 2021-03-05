
import {firebase, googleAuthProvider} from "../firebase/firebase-config";
import {types} from "../types/types";

export const startLoginEmailPassword = () => {
    return (dispatch) => {

        setTimeout(()=> {
            dispatch(login(112000, 'Papaya'))
        }, 3000)
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {  // on extrait l'user, et après l'obtention de la resp lance le dispatch
                // console.log(userCred)
                dispatch(
                    login(user.uid, user.displayName
                    )) // dispatch login action
            })
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
