import { USER_GIVEN_TACO } from '../actions/types'

const defaultState = {
    remainingTacos: 5,
    givenTacos: [],
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_GIVEN_TACO:
            return {
                ...state,
                remainingTacos: state.remainingTacos - 1,
                givenTacos: [
                    ...state.givenTacos,
                    {
                        from: action.from_user,
                        to: action.to_user,
                        reason: action.reason,
                    }
                ]
            }
        default:
            return state
    }    
}