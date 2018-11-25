import {createStore} from 'redux';
import data from './data.json';

const defaultState = {
	products: data,
	totalProducts: 0,
	totalPrice: 0
}

const store = createStore((state = defaultState, action) => {

		console.log()

		if (action.type === 'TOTAL.DECREASE') {
			return Object.assign({}, state, {totalProducts: state.totalProducts - 1, totalPrice: state.totalPrice - action.price})
		}

		if (action.type === 'TOTAL.INCREASE') {
			return Object.assign({}, state, {totalProducts: state.totalProducts + 1, totalPrice: state.totalPrice + action.price})
		}

		if (action.type === 'AMOUNT.DECREASE') {
			return Object.assign({}, state, {totalProducts: state.totalProducts - action.amount, totalPrice: state.totalPrice - action.amount * action.price})
		}

		if (action.type === 'AMOUNT.INCREASE') {
			return Object.assign({}, state, {totalProducts: state.totalProducts + action.amount, totalPrice: state.totalPrice + action.amount * action.price})
		}

		return state;
	}
)

export default store;

export const actions = {
	decreaseTotal(price) {
		store.dispatch({type: 'TOTAL.DECREASE', price})
	},

	increaseTotal(price) {
		store.dispatch({type: 'TOTAL.INCREASE', price})
	},

	decreaseAmount(amount, price) {
		store.dispatch({type: 'AMOUNT.DECREASE', amount, price})
	},

	increaseAmount() {
		store.dispatch({type: 'AMOUNT.INCREASE', amount, price})
	}

}