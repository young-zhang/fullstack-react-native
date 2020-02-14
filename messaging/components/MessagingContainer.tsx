import {BackHandler, LayoutAnimation, NativeEventSubscription, Platform, UIManager, View,} from 'react-native';
import PropTypes, {ReactNodeLike} from 'prop-types';
import {isIphoneX} from 'react-native-iphone-x-helper';

import React from 'react';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

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

    private subscription: NativeEventSubscription;

    componentDidMount() {
        this.subscription = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                const {onChangeInputMethod, inputMethod} = this.props;

                if (inputMethod === INPUT_METHOD.CUSTOM) {
                    onChangeInputMethod(INPUT_METHOD.NONE);
                    return true;
                }

                return false;
            }
        );
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    componentDidUpdate(prevProps) {
        const {onChangeInputMethod} = this.props;

        if (this.props.keyboardVisible && !prevProps.keyboardVisible) {
            // Keyboard shown
            onChangeInputMethod(INPUT_METHOD.KEYBOARD);
        }
        else if (!this.props.keyboardVisible && prevProps.keyboardVisible && this.props.inputMethod !== INPUT_METHOD.CUSTOM) {            // Keyboard hidden

            onChangeInputMethod(INPUT_METHOD.NONE);
        }

        const {keyboardAnimationDuration} = this.props;

        // Animate between states
        const animation = LayoutAnimation.create(
            keyboardAnimationDuration,
            Platform.OS === 'android'
                ? LayoutAnimation.Types.easeInEaseOut
                : LayoutAnimation.Types.keyboard,
            LayoutAnimation.Properties.opacity,
        );
        LayoutAnimation.configureNext(animation);
    }

    render() {
        const {
            children,
            renderInputMethodEditor,
            inputMethod,
            containerHeight,
            contentHeight,
            keyboardHeight,
            keyboardWillShow,
            keyboardWillHide,
        } = this.props;

        // For our outer `View`, we want to choose between rendering at
        // full height (`containerHeight`) or only the height above the
        // keyboard (`contentHeight`). If the keyboard is currently
        // appearing (`keyboardWillShow` is `true`) or if it's fully
        // visible (`inputMethod === INPUT_METHOD.KEYBOARD`), we should
        // use `contentHeight`.
        const useContentHeight = keyboardWillShow || inputMethod === INPUT_METHOD.KEYBOARD;
        const containerStyle = {
            height: useContentHeight ? contentHeight : containerHeight,
        };

        // We want to render our custom input when the user has pressed
        // the camera button (`inputMethod === INPUT_METHOD.CUSTOM`), so
        // long as the keyboard isn't currently appearing (which would
        // mean the input field has received focus, but we haven't updated
        // the `inputMethod` yet).
        const showCustomInput = inputMethod === INPUT_METHOD.CUSTOM && !keyboardWillShow;

        // The keyboard is hidden and not transitioning up
        const keyboardIsHidden = inputMethod === INPUT_METHOD.NONE && !keyboardWillShow;

        // The keyboard is visible and transitioning down
        const keyboardIsHiding = inputMethod === INPUT_METHOD.KEYBOARD && keyboardWillHide;

        // If `keyboardHeight` is `0`, this means a hardware keyboard is
        // connected to the device. We still want to show our custom image
        // picker when a hardware keyboard is connected, so let's set
        // `keyboardHeight` to `250` in this case.

        const inputStyle = {
            height: showCustomInput ? keyboardHeight || 250 : 0,
            // Show extra space if the device is an iPhone X the keyboard is not visible
            marginTop: isIphoneX() && (keyboardIsHidden || keyboardIsHiding) ? 24 : 0
        };

        return (
            <View style={containerStyle}>
                {children}
                <View style={inputStyle}>{renderInputMethodEditor()}</View>
            </View>
        );
    }
}