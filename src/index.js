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
    `"${tacoLog.from}" gave a 🌮 to`,
    `"${tacoLog.to}" because`,
    `${tacoLog.reason}`
].join(' ')))

console.log(`He has ${store.getState().remainingTacos} 🌮 tacos remaining.`)

document.getElementsByTagName("body")[0].innerHTML = `
    <div>
        <h1>This application has no UI.</h1>
        <p>Please open developer console to see the output.</p>
        <p>The idea is: Erdem has 🌮 tacos. He gives these 🌮 tacos to Webinar attendees.</p>
        <p>Redux is used transfer these 🌮 tacos and store the state.</p>
    </div>
`