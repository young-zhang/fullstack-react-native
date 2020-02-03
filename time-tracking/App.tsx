import React from 'react';
import uuidv4 from 'uuid/v4';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default class App extends React.Component {
    state = {
        timers: [
            {
                title: 'Mow the lawn',
                project: 'House Chores',
                id: uuidv4(),
                elapsed: 5456099,
                isRunning: true,
            },
            {
                title: 'Bake squash',
                project: 'Kitchen Chores',
                id: uuidv4(),
                elapsed: 1273998,
                isRunning: false,
            },
        ],
    };

    render() {
        return (
            <View style={styles.appContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Timers</Text>
                </View>
                <ScrollView style={styles.timerList}>
                    <ToggleableTimerForm isOpen={false} />
                    <EditableTimer
                        id={1}
                        title="Mow the lawn"
                        project="House Chores"
                        elapsed={8986300}
                        isRunning />
                    <EditableTimer
                        id={2}
                        title="Bake squash"
                        project="Kitchen Chores"
                        elapsed={3890985}
                        editFormOpen />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },
    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    timerList: {
        paddingBottom: 15,
    },
});