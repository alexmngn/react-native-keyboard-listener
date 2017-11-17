import { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Keyboard,
} from 'react-native';

const events = ['WillShow', 'WillHide', 'DidShow', 'DidHide', 'WillChangeFrame', 'DidChangeFrame'];

class KeyboardListener extends Component {

	listeners = []

	static propTypes = Object.keys(events).reduce((prev, event) => ({
		...prev,
		...{ [`on${event}`]: PropTypes.func },
	}), {})

	componentWillMount() {
		events.forEach(event => {
			const keyProp = `on${event}`;
			if (this.props[keyProp]) {
				this.listeners.push(Keyboard.addListener(
					`keyboard${event}`, this.props[keyProp],
				));
			}
		});
	}
	componentWillUnmount() {
		this.listeners.forEach(listener => listener.remove());
		this.listener = [];
	}

	render() {
		return false;
	}
}

export default KeyboardListener;
