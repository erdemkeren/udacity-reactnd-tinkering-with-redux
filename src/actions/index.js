import { USER_GIVEN_TACO } from './types'

export const createUserGivenTacoAction = (from_user, to_user, reason) => ({
    type: USER_GIVEN_TACO,
    from_user,
    to_user,
    reason,
})
