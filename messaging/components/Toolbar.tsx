import {GestureResponderEvent, NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputFocusEventData, TouchableOpacity, View,} from 'react-native';
import React from 'react';

const ToolbarButton: React.FC<{ title: string, onPress: (GestureResponderEvent) => void }> = () => {
    const {title, onPress} = this.prop;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>{title}</Text>
        </TouchableOpacity>
    )
};

interface ToolbarProp {
    isFocused: boolean
    onChangeFocus?: (boolean) => void
    onSubmit?: (string) => void
    onPressCamera?: (GestureResponderEvent) => void
    onPressLocation?: (GestureResponderEvent) => void
}

interface ToolbarState {
    text: string
}

export default class Toolbar extends React.Component<ToolbarProp, ToolbarState> {
    static defaultProps = {
        onChangeFocus: (t: boolean) => { },
        onSubmit: () => { },
        onPressCamera: () => { },
        onPressLocation: () => { },
    };

    state = {text: ''};

    componentDidUpdate(prevProps) {
        if (this.props.isFocused !== prevProps.isFocused) {
            if (this.props.isFocused) {
                this.input.focus();
            }
            else {
                this.input.blur();
            }
        }
    }

    private input: TextInput;

    setInputRef = (ref: TextInput) => {
        this.input = ref;
    };

    handleFocus = () => {
        const {onChangeFocus} = this.props;
        onChangeFocus(true);
    };

    handleBlur = () => {
        const {onChangeFocus} = this.props;
        onChangeFocus(false);
    };

    handleChangeText = (text) => { this.setState({text}); };

    handleSubmitEditing = () => {
        const {onSubmit} = this.props;
        const {text} = this.state;

        if (!text) return; // Don't submit if empty

        onSubmit(text);
        this.setState({text: ''});
    };

    render() {
        const {onPressCamera, onPressLocation} = this.props;
        const {text} = this.state;

        return (
            <View style={styles.toolbar}>
                <ToolbarButton title={'📷'} onPress={onPressCamera} />
                <ToolbarButton title={'📍'} onPress={onPressLocation} />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                               underlineColorAndroid={'transparent'}
                               placeholder={'Type something!'}
                               blurOnSubmit={false}
                               value={text}
                               onChangeText={this.handleChangeText}
                               onSubmitEditing={this.handleSubmitEditing}
                               ref={this.setInputRef}
                               onFocus={this.handleFocus}
                               onBlur={this.handleBlur} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingLeft: 16,
        backgroundColor: 'white',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.04)',
        borderRadius: 16,
        paddingVertical: 4,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.02)',
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    button: {
        top: -2,
        marginRight: 12,
        fontSize: 20,
        color: 'grey',
    },
});