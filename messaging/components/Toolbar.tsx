import {GestureResponderEvent, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
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
    onChangeFocus?: (any) => any
    onSubmit?: (string) => void
    onPressCamera?: (GestureResponderEvent) => void
    onPressLocation?: (GestureResponderEvent) => void
}

interface ToolbarState {
    text: string
}

export default class Toolbar extends React.Component<ToolbarProp, ToolbarState> {
    static defaultProps = {
        onChangeFocus: () => { },
        onSubmit: () => { },
        onPressCamera: () => { },
        onPressLocation: () => { },
    };

    state = {text: ''};

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
                               onSubmitEditing={this.handleSubmitEditing} />
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