import React, {Component} from 'react';
import './styles.scss';

const Counter = (props) => {
	const {value, max, min = 0, onDecrease, onIncrease} = props;

	const decrease = () => {
		if (value > min) {
			onDecrease();
		}
	}

	const increase = () => {
		if (value < max) {
			onIncrease();
		}
	}

	const counterClass = ['counter', value > 0 ? 'selected': ''].join(' ').trim();
	const valueClass = ['value', value === max ? 'maximum':''].join(' ').trim();

	return (
		<div className={counterClass}>
			<button className="decrease" onClick={decrease} />
			<div className={valueClass}>{value}</div>
			<button className="increase" onClick={increase} />
		</div>
	)
}

export default Counter;