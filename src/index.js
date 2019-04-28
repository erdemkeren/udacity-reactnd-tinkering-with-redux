import { createStore } from 'redux'
import { reducer } from './reducers'
import { createUserGivenTacoAction } from './actions'

window.createUserGivenTacoAction = createUserGivenTacoAction

const store = createStore(reducer)
window.store = store

const unsubscribe = store.subscribe(() => console.log(store.getState()))
window.unsubscribe = unsubscribe

store.dispatch(createUserGivenTacoAction('Erdem', 'A...m', 'he attended to webinar!'))
store.dispatch(createUserGivenTacoAction('Erdem', 'An...a', 'he attended to webinar!'))
store.dispatch(createUserGivenTacoAction('Erdem', 'a...f', 'he attended to webinar!'))
store.dispatch(createUserGivenTacoAction('Erdem', 'B..r', 'he attended to webinar!'))
store.dispatch(createUserGivenTacoAction('Erdem', 'F...x', 'he attended to webinar!'))
store.dispatch(createUserGivenTacoAction('Erdem', 'P.....t', 'he attended to webinar!'))

store.getState().givenTacos.map(tacoLog => console.log([
    `"${tacoLog.from}" gave a taco to`,
    `"${tacoLog.to}" because`,
    `${tacoLog.reason}`
].join(' ')))

console.log(`He has ${store.getState().remainingTacos} tacos remaining.`)
