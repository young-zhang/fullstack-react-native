import {ColorPropType, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

interface P {
    initials: string
    size: number
    backgroundColor: string
}

const Avatar: React.FC<P> = (p) => {
    const {initials, size, backgroundColor} = p;
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    };

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
});