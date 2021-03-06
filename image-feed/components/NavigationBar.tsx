import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from "react";

interface P {
    title?: string
    leftText?: string
    onPressLeftText?: (event: GestureResponderEvent) => void;
}

const NavigationBar: React.FC<P> = (props) => {
    const {title, leftText, onPressLeftText} = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
                <Text>{leftText}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};
export default NavigationBar;

NavigationBar.defaultProps = {
    title: '',
    leftText: '',
    onPressLeftText: () => {
    },
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
    leftText: {
        position: 'absolute',
        left: 20,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});
