import Layout from './components/layout';

import React from 'react';
import {Provider} from 'react-redux';
import store from '@/store';

export default function() {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	)
}
