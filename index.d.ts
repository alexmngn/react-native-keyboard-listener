import * as React from 'react'

interface KeyboardListenerProps {
  readonly onWillShow?: () => void
  readonly onWillHide?: () => void
  readonly onDidShow?: () => void
  readonly onDidHide?: () => void
  readonly onWillChangeFrame?: () => void
  readonly onDidChangeFram?: () => void
}

declare class KeyboardListener extends React.Component<KeyboardListenerProps> {}

export default KeyboardListener
