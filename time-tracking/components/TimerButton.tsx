import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface P {
    color: string,
    title: string,
    small?: boolean,
    onPress: (event: GestureResponderEvent) => void
}

const TimerButton: React.FC<P> = (p) => {
    return (
        <TouchableOpacity style={[styles.button, {borderColor: p.color}]}
                          onPress={p.onPress}>
            <Text style={[styles.buttonText, p.small ? styles.small : styles.large, {color: p.color}]}>
                {p.title}
            </Text>
        </TouchableOpacity>
    );
};

TimerButton.defaultProps = {small: false};

export default TimerButton;

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        minWidth: 100,
        borderWidth: 2,
        borderRadius: 3,
    },
    small: {
        fontSize: 14,
        padding: 5,
    },
    large: {
        fontSize: 16,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 10,
    },
});
