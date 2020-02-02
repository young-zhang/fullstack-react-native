import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {millisecondsToHuman} from '../utils/TimerUtils';
import TimerButton from './TimerButton';

interface P {
    id?: number,
    title: string,
    project: string,
    elapsed: number,
    isRunning: boolean
}

const Timer: React.FC<P> = (p) => {
    const elapsedString = millisecondsToHuman(p.elapsed);

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{p.title}</Text>
            <Text>{p.project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton color="blue" small title="Edit" />
                <TimerButton color="blue" small title="Remove" />
            </View>
            <TimerButton color="#21BA45" title="Start" />
        </View>
    );
};

export default Timer;

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});