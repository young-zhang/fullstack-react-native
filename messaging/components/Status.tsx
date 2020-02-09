import Constants from 'expo-constants';
import NetInfo from '@react-native-community/netinfo';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';

interface S {
    isConnected: boolean
}

export default class Status extends React.Component<{}, S> {
    state = {
        isConnected: null,
    };

    render() {
        const {isConnected} = this.state;
        const backgroundColor = isConnected ? 'white' : 'red';

        const statusBar = (<StatusBar backgroundColor={backgroundColor}
                                      barStyle={isConnected ? 'dark-content' : 'light-content'}
                                      animated={false} />);

        if (Platform.OS === 'ios') {
            return (<View style={[styles.status, {backgroundColor}]}>{messageContainer}</View>);
        }
        return null; // Temporary!
    }
}

const statusHeight = (Platform.OS === 'ios' ? Constants.statusBarHeight : 0);
const styles = StyleSheet.create({
    status: {
        zIndex: 1,
        height: statusHeight,
    },
});