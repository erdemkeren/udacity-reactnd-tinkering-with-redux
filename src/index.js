import { createStore } from 'redux'

const USER_GIVEN_TACO = 'user-given-taco'

const defaultState = {
    remainingTacos: 5,
    givenTacos: [],
}

const createUserGivenTacoAction = (from_user, to_user, reason) => ({
    type: USER_GIVEN_TACO,
    from_user,
    to_user,
    reason,
})

window.createUserGivenTacoAction = createUserGivenTacoAction

const reducer = (state = defaultState, action) => {
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

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => console.log(store.getState()))

window.unsubscribe = unsubscribe

window.store = store