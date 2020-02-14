import {BackHandler, LayoutAnimation, Platform, UIManager, View,} from 'react-native';
import PropTypes, {ReactNodeLike} from 'prop-types';

import React from 'react';

export const INPUT_METHOD = {
    NONE: 'NONE',
    KEYBOARD: 'KEYBOARD',
    CUSTOM: 'CUSTOM',
};

type InputMethod = 'NONE' | 'KEYBOARD' | 'CUSTOM';

interface P {
    // From KeyboardState
    containerHeight: number
    contentHeight: number
    keyboardHeight: number
    keyboardVisible: boolean
    keyboardWillShow: boolean
    keyboardWillHide: boolean
    keyboardAnimationDuration: number

    // Managing the IME type
    inputMethod: InputMethod
    onChangeInputMethod?: any

    // Rendering content
    children?: ReactNodeLike
    renderInputMethodEditor: any
}

export default class MessagingContainer extends React.Component<P> {
    static defaultProps = {
        children: null,
        onChangeInputMethod: () => {},
    };

    // ...

    componentDidUpdate(prevProps) {
        const {onChangeInputMethod} = this.props;
        if (this.props.keyboardVisible && !prevProps.keyboardVisible) {
            // Keyboard shown
            onChangeInputMethod(INPUT_METHOD.KEYBOARD);
        }
        else if (
            // Keyboard hidden
            !this.props.keyboardVisible &&
            prevProps.keyboardVisible &&
            this.props.inputMethod !== INPUT_METHOD.CUSTOM
        ) {
            onChangeInputMethod(INPUT_METHOD.NONE);
        }
        // ... more to come!
    }
}