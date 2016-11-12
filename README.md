# react-native-keyboard-listener

This component is a shortcut to listen to the keyboard when the component mounts.

Should work for React-Native 0.27+.

## Installation

```
npm install --save react-native-keyboard-listener
```

## Usage

Import the component into the file you want to use it:

```js
import KeyboardListener from 'react-native-keyboard-listener';
```

Use the component directly in your code. The component won't render anything

```jsx
<View>
	<KeyboardListener
		onWillShow={() => { this.setState({ keyboardOpen: true }); }}
		onWillHide={() => { this.setState({ keyboardOpen: false }); }}
	/>
</View>
```

## Methods

- `onWillShow()`
- `onWillHide()`
- `onDidShow()`
- `onDidHide()`
- `onWillChangeFrame()`
- `onDidChangeFrame()`


## Licence

MIT
