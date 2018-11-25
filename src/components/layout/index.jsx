import React, {Component} from 'react';
import {connect} from 'react-redux'
import './layout.scss';

import Cart from '@/components/cart'

class Layout extends Component {
	constructor(props) {
		super(props);
	}

	get grid() {
		return this.props.products.map(item => (
			<div className="grid-cell" key={item.id}>
				<Cart cart={item} />
			</div>
		))
	}

	render() {
		const {products, totalProducts, totalPrice} = this.props;

		return (
			<div className="layout">
				<header>
					<div className="stat products">
						Products in cart:
						<span className="value">{totalProducts}</span>
					</div>
					<div className="stat total-price">
						Total price:
						<span className="value">{totalPrice} $</span>
					</div>
				</header>
				<div className="grid">
					{this.grid}
				</div>
			</div>
		)
	}
}

export default connect(
	({products, totalProducts, totalPrice}) => {
		return {products, totalProducts, totalPrice}
	}
)(Layout);
