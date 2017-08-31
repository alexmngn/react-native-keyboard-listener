import { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Keyboard,
} from 'react-native';

class KeyboardListener extends Component {
	componentWillMount() {
		if (this.props.onWillShow) {
			this.keyboardWillShowListener = Keyboard.addListener(
				'keyboardWillShow', () => this.props.onWillShow(),
			);
		}
		if (this.props.onWillHide) {
			this.keyboardWillHideListener = Keyboard.addListener(
				'keyboardWillHide', () => this.props.onWillHide(),
			);
		}
		if (this.props.onDidShow) {
			this.keyboardDidShowListener = Keyboard.addListener(
				'keyboardDidShow', () => this.props.onDidShow(),
			);
		}
		if (this.props.onDidHide) {
			this.keyboardDidHideListener = Keyboard.addListener(
				'keyboardDidHide', () => this.props.onDidHide(),
			);
		}
		if (this.props.onWillChangeFrame) {
			this.keyboardWillChangeFrameListener = Keyboard.addListener(
				'keyboardWillChangeFrame', () => this.props.onWillChangeFrame(),
			);
		}
		if (this.props.onDidChangeFrame) {
			this.keyboardDidChangeFrameListener = Keyboard.addListener(
				'keyboardDidChangeFrame', () => this.props.onDidChangeFrame(),
			);
		}
	}
	componentWillUnmount() {
		if (this.keyboardWillShowListener) {
			this.keyboardWillShowListener.remove();
			this.keyboardWillShowListener = null;
		}
		if (this.keyboardWillHideListener) {
			this.keyboardWillHideListener.remove();
			this.keyboardWillHideListener = null;
		}
		if (this.keyboardDidShowListener) {
			this.keyboardDidShowListener.remove();
			this.keyboardDidShowListener = null;
		}
		if (this.keyboardDidHideListener) {
			this.keyboardDidHideListener.remove();
			this.keyboardDidHideListener = null;
		}
		if (this.keyboardWillChangeFrameListener) {
			this.keyboardWillChangeFrameListener.remove();
			this.keyboardWillChangeFrameListener = null;
		}
		if (this.keyboardDidChangeFrameListener) {
			this.keyboardDidChangeFrameListener.remove();
			this.keyboardDidChangeFrameListener = null;
		}
	}

	render() {
		return false;
	}
}

KeyboardListener.propTypes = {
	onWillShow: PropTypes.func,
	onWillHide: PropTypes.func,
	onDidShow: PropTypes.func,
	onDidHide: PropTypes.func,
	onWillChangeFrame: PropTypes.func,
	onDidChangeFrame: PropTypes.func,
};

export default KeyboardListener;
