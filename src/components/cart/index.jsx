import './styles.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux'
import baseComponent from '@/components/base-component.jsx'
import Counter from '@/components/counter'
import {actions} from '@/store'

class Cart extends baseComponent {

	constructor(props) {
		super(props)

		this.state = {
			amount: 0
		}


		this.bind(['decrease', 'increase', 'reset'])
	}

	decrease() {
		this.setState({
			amount: this.state.amount - 1
		})

		this.props.decreaseTotal(+this.props.cart.price)
	}

	increase() {
		this.setState({
			amount: this.state.amount + 1
		})

		this.props.increaseTotal(+this.props.cart.price)
	}

	reset() {
		this.props.decreaseAmount(this.state.amount, +this.props.cart.price)

		this.setState({
			amount: 0
		})
	}

	render() {
		const {cart} = this.props;
		const {amount} = this.state;

		return (
			<div className="cart">
				<div className="title">
					{cart.name}
				</div>

				<div className="image">
					<img src={cart.src} />
					<div className="img-cover" />
				</div>

				<div className="price">
					Price: {cart.price} $
				</div>

				<Counter
					value={amount}
					max={cart.limit}
					onDecrease={this.decrease}
					onIncrease={this.increase}
				/>

				<div className="price-total">
					<span>Total:</span>
					<span>totalPrice $</span>
				</div>

				<div className="reset-wrapper">
					<button className="reset" onClick={this.reset}>Reset</button>
				</div>
			</div>
		)
	}
}

export default connect(null, dispatch => actions)(Cart);
