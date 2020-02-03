import React from 'react';
import {StyleSheet, View} from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

const ToggleableTimerForm: React.FC<{ isOpen?: boolean }> = (p) => {
    return (
        <View style={[styles.container, !p.isOpen && styles.buttonPadding]}>
            {p.isOpen ? (
                <TimerForm />
            ) : (
                <TimerButton title="+" color="black" />
            )}
        </View>
    );
};

export default ToggleableTimerForm;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});
