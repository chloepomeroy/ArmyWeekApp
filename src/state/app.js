import anime from 'animejs/lib/anime.es.js'
import { get, set, del } from '../utils/storage'
import { State } from '../utils/state'

const initialState = {
	app: {
        mounted: false,
        alert: null,
        initialized: false
    },
}

export const { appStore, AppProvider } = State(initialState, 'app')


export const onAppMount = () => async ({ update, getState, dispatch }) => {
    update('app', { mounted: true })
   
}
