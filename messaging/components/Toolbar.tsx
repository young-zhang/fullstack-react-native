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
    onSubmit?: (any) => any
    onPressCamera?: (GestureResponderEvent) => void
    onPressLocation?: (GestureResponderEvent) => void
}

export default class Toolbar extends React.Component<ToolbarProp> {
    static defaultProps = {
        onChangeFocus: () => { },
        onSubmit: () => { },
        onPressCamera: () => { },
        onPressLocation: () => { },
    };

    render() {
        const {onPressCamera, onPressLocation} = this.props;
        return (
            <View style={styles.toolbar}>
                <ToolbarButton title={'📷'} onPress={onPressCamera} />
                <ToolbarButton title={'📍'} onPress={onPressLocation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 10, paddingLeft: 16, backgroundColor: 'white',
    },
    button: {
        top: -2,
        marginRight: 12,
        fontSize: 20,
        color: 'grey',
    },
});