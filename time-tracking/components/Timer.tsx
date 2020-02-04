import React from 'react';
import {StyleSheet, View, Text, GestureResponderEvent} from 'react-native';

import {millisecondsToHuman} from '../utils/TimerUtils';
import TimerButton from './TimerButton';

interface P {
    id?: string
    title: string
    project: string
    elapsed: number
    isRunning: boolean
    onEditPress: (event: GestureResponderEvent) => void
    onRemovePress: (id: string) => void
}

export default class Timer extends React.Component<P> {
    handleRemovePress = () => {
        const { id, onRemovePress } = this.props;
        onRemovePress(id);
    };

    render() {
        const {elapsed, title, project, onEditPress, onRemovePress} = this.props;
        const elapsedString = millisecondsToHuman(elapsed);

        return (
            <View style={styles.timerContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text>{project}</Text>
                <Text style={styles.elapsedTime}>{elapsedString}</Text>
                <View style={styles.buttonGroup}>
                    <TimerButton color="blue" small title="Edit" onPress={onEditPress} />
                    <TimerButton color="blue" small title="Remove" onPress={this.handleRemovePress} />
                </View>
                <TimerButton color="#21BA45" title="Start" />
            </View>
        );
    }
}

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